const movebtn = document.querySelectorAll('.moveBtn');
const list1 = document.querySelector('#list1');
const list2 = document.querySelector('#list2');

for (let counter = 0; counter < movebtn.length; counter++) {
    movebtn[counter].addEventListener("click", function () {
        let toAppend = this.parentElement.parentElement === list1 ? list2 : list1;
        toAppend.appendChild(this.parentElement);
    })
}