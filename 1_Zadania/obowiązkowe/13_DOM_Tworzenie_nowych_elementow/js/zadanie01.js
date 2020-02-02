const menu = document.querySelector('.menu');
const button = document.querySelector('.button');

button.addEventListener("click", function () {
    let itemCounter = menu.children.length;
    let li = document.createElement("li");
    li.innerHTML = `Element ${itemCounter + 1} - w chwili dodania było ${itemCounter} elementów`;
    menu.appendChild(li);
});