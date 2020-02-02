const form = document.querySelector('form');

const name = document.querySelector('#name');

const surname = document.querySelector('#surname');

const pass1 = document.querySelector('#pass1');

const pass2 = document.querySelector('pass2');

const chceckbox = document.querySelector('#agree');

const email = document.querySelector('#email');

const error = document.querySelector('.error-message');

form.addEventListener('submit', function () {
    if (!email.value.includes('@')) {
        error.innerHTML = "Email musi posiadać znak @";
        event.preventDefault();
    }

    if (name.value.length < 6) {
        error.innerHTML = "Twoje imię jest za krótkie";
        event.preventDefault();
    }

    if (surname.value.length < 6) {
        error.innerHTML = "Twoje nazwisko jest za krótkie";
        event.preventDefault();
    }

    if (!(pass1.value && pass2.value === pass2.value)) {
        error.innerHTML = "Hasła nie są takie same lub puste";
        event.preventDefault();
    }

    if (!chceckbox.checked) {
        error.innerHTML = "Musisz zaakceptować warunki";
        event.preventDefault();
    }
})