const form = document.querySelector('.form-control');
const img = document.querySelectorAll('img');
const header = document.querySelector('.page-header');
const select = document.querySelector('select');

let appleImage = header.children[1];
let ubuntuImage = header.children[2];
let winImage = header.children[3];

appleImage.style.display = 'none';
ubuntuImage.style.display = 'none';
winImage.style.display = 'block';

select.addEventListener("click", function () {
    if (this.value == "Windows") {
        appleImage.style.display = 'none';
        ubuntuImage.style.display = 'none';
        winImage.style.display = 'block';
    }

    if (this.value == "Os X") {
        appleImage.style.display = 'block';
        ubuntuImage.style.display = 'none';
        winImage.style.display = 'none';
    }

    if (this.value == "Ubuntu") {
        appleImage.style.display = 'none';
        ubuntuImage.style.display = 'block';
        winImage.style.display = 'none';
    }
});