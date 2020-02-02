const buttons = document.querySelectorAll('.button');

for (let counter = 0; counter < buttons.length; counter++) {
    buttons[counter].addEventListener("click", function () {
        let nextElement = this.nextElementSibling;
        if (nextElement !== null) {
            nextElement.classList.toggle("hidden");
        }
    })
}