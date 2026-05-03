// lightbox pre galeriu

var fotky = [
    { src: 'img/tatry-hero.png', nazov: 'Vysoké Tatry' },
    { src: 'img/bratislava.png', nazov: 'Bratislava' },
    { src: 'img/slovensky-raj.png', nazov: 'Slovenský raj' },
    { src: 'img/spissky-hrad.png', nazov: 'Spišský hrad' },
    { src: 'img/bojnice.png', nazov: 'Bojnický zámok' },
    { src: 'img/dreveny-kostol.png', nazov: 'Drevený kostolík' },
    { src: 'img/vlkolinec.png', nazov: 'Vlkolínec' },
    { src: 'img/demanovska-jaskyna.png', nazov: 'Demänovská jaskyňa' },
    { src: 'img/halusky.png', nazov: 'Bryndzové halušky' }
];

var aktualny = 0;

function otvorObrazok(i) {
    aktualny = i;
    document.getElementById('lbImg').src = fotky[i].src;
    document.getElementById('lbText').textContent = fotky[i].nazov;
    document.getElementById('lightbox').classList.add('active');
}

function zatvorLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function posun(smer) {
    aktualny = aktualny + smer;
    if (aktualny < 0) aktualny = fotky.length - 1;
    if (aktualny >= fotky.length) aktualny = 0;
    document.getElementById('lbImg').src = fotky[aktualny].src;
    document.getElementById('lbText').textContent = fotky[aktualny].nazov;
}

// pripojim eventy po nacitani stranky
window.onload = function() {
    // kliknutie na fotky v galerii
    var polozky = document.querySelectorAll('.gallery-item');
    for (var i = 0; i < polozky.length; i++) {
        polozky[i].setAttribute('data-index', i);
        polozky[i].addEventListener('click', function() {
            var index = parseInt(this.getAttribute('data-index'));
            otvorObrazok(index);
        });
    }

    // tlacidlo zavriet
    document.getElementById('lb-zatvorit').addEventListener('click', zatvorLightbox);

    // navigacia - predosla / dalsia
    document.getElementById('lb-prev').addEventListener('click', function() {
        posun(-1);
    });
    document.getElementById('lb-next').addEventListener('click', function() {
        posun(1);
    });

    // escape zatvori lightbox
    document.onkeydown = function(e) {
        if (e.key == 'Escape') zatvorLightbox();
    };
};
