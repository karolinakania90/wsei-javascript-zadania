const orders = document.querySelector('.orders');
const id = document.querySelector('#orderId');
const item = document.querySelector('#item');
const quantity = document.querySelector('#quantity');
const button = document.querySelector('.button');

button.addEventListener("click", function () {
    let tr = document.querySelector('tr');
    let navtr = tr.cloneNode(true);

    orders.appendChild(navtr);

    orders.children[0].innerHTML = id.value;
    orders.children[1].innerHTML = item.value;
    orders.children[2].innerHTML = quantity.value;
});