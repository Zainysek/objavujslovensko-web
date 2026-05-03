// validacia kontaktneho formulara

function overFormular(event) {
    event.preventDefault();

    var ok = true;

    // resetnem chyby
    var skupiny = document.querySelectorAll('.form-group');
    for (var i = 0; i < skupiny.length; i++) {
        skupiny[i].classList.remove('error');
    }

    // overenie mena
    var meno = document.getElementById('meno').value.trim();
    if (meno.length < 3) {
        document.getElementById('gMeno').classList.add('error');
        ok = false;
    }

    // overenie emailu
    var email = document.getElementById('email').value.trim();
    var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(email)) {
        document.getElementById('gEmail').classList.add('error');
        ok = false;
    }

    // overenie temy
    if (document.getElementById('tema').value == '') {
        document.getElementById('gTema').classList.add('error');
        ok = false;
    }

    // overenie radio
    var radios = document.getElementsByName('typ');
    var vybraty = false;
    for (var j = 0; j < radios.length; j++) {
        if (radios[j].checked) vybraty = true;
    }
    if (!vybraty) {
        document.getElementById('gTyp').classList.add('error');
        ok = false;
    }

    // overenie spravy
    var sprava = document.getElementById('sprava').value.trim();
    if (sprava.length < 10) {
        document.getElementById('gSprava').classList.add('error');
        ok = false;
    }

    // overenie suhlasu
    if (!document.getElementById('suhlas').checked) {
        document.getElementById('gSuhlas').classList.add('error');
        ok = false;
    }

    if (ok) {
        document.getElementById('uspech').classList.add('show');
        document.getElementById('formular').reset();
    }

    return false;
}

// pripojim event listener na formular
window.onload = function() {
    var form = document.getElementById('formular');
    form.addEventListener('submit', overFormular);
};
