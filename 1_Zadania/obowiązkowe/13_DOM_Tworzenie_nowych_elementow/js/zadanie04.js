const button = document.querySelector('#remove');
const list = document.querySelector('.list');

button.addEventListener("click", function () {
    list.forEach(element => {
        element.parentElement.removeChild(element);
    });
});