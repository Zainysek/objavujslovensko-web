// nacitanie dat z json suboru cez ajax
function nacitaj() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);

    xhr.onload = function() {
        if (xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            zobraz(data);
        } else {
            document.getElementById('loading').classList.add('skryta');
            document.getElementById('chyba').classList.remove('skryta');
        }
    };

    xhr.onerror = function() {
        document.getElementById('loading').classList.add('skryta');
        document.getElementById('chyba').classList.remove('skryta');
    };

    xhr.send();
}

// zobrazenie dat v tabulke
function zobraz(data) {
    var telo = document.getElementById('telo');
    var html = '';

    // prechadza 3 urovne: regiony -> kraje -> pamiatky
    for (var i = 0; i < data.regióny.length; i++) {
        var reg = data.regióny[i];

        for (var j = 0; j < reg.kraje.length; j++) {
            var kraj = reg.kraje[j];

            for (var k = 0; k < kraj.pamiatky.length; k++) {
                var p = kraj.pamiatky[k];

                html += '<tr>';
                html += '<td>' + reg.nazov + '</td>';
                html += '<td>' + kraj.nazov + '</td>';
                html += '<td><b>' + p.nazov + '</b></td>';
                html += '<td>' + p.typ + '</td>';

                if (p.unesco) {
                    html += '<td><span class="badge badge-green">Áno</span></td>';
                } else {
                    html += '<td><span class="badge badge-blue">Nie</span></td>';
                }

                if (p.vstupne == 0) {
                    html += '<td>Zadarmo</td>';
                } else {
                    html += '<td>' + p.vstupne + ' €</td>';
                }

                html += '</tr>';
            }
        }
    }

    telo.innerHTML = html;
    document.getElementById('loading').classList.add('skryta');
    document.getElementById('tabulka').classList.remove('skryta');
}

// spustim po nacitani stranky
window.onload = function() {
    nacitaj();
};
