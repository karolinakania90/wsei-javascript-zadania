document.addEventListener("DOMContentLoaded", function () {
    // zadanie 0    
    function exZero() {
        const elements = document.querySelectorAll('.ex5 ul li');
        console.log(elements);
        for (let counter = 0; counter < elements.length; counter++) {
            if (counter % 2 == 0) {
                elements[counter].style.backgroundColor = 'green';
            }
            if (counter % 5 === 0) {
                elements[counter].classList.add('.big');
                console.log(elements);
            }
            if (counter % 3 === 0) {
                elements[counter].style.borderBottom = '3px solid';
            }
        }
        return elements
    }

    exZero();

    // zadanie 1

    function fixLinks() {
        const edgeLink = "https://www.microsoft.com/en-US/windows/microsoft-edge";
        const firefoxLink = "https://www.mozilla.org/en-US/firefox/new/";

        let edge = document.querySelector('.edge');
        edge.style.backgroundImage = "url('assets/img/edge.png')";

        let firefox = document.querySelector('.firefox');
        firefox.style.backgroundImage = "url('assets/img/firefox.png')";

        let chrome = document.querySelector('.chrome');
        chrome.style.width = "100px";

        chrome.parentElement.querySelector('a').innerHTML = "Chrome";
        edge.parentElement.querySelector('a').innerHTML = "Microsoft Edge";
        firefox.parentElement.querySelector('a').innerHTML = "Firefox";

        edge.parentElement.querySelector('a').setAttribute("href", edgeLink);
        firefox.parentElement.querySelector('a').setAttribute("href", firefoxLink);
    }

    fixLinks();

    // zadanie 2

    function putUserData() {
        const _spanName = document.querySelectorAll('.ex2 ul li span')[0];
        const _spanColor = document.querySelectorAll('.ex2 ul li span')[1];
        const _spanFood = document.querySelectorAll('.ex2 ul li span')[2];

        _spanName.innerHTML = 'Karolina Kania';
        _spanColor.innerHTML = 'Kania';
        _spanFood.innerHTML = 'Bób gotowany';

        return _spanName, _spanColor, _spanFood;
    }

    putUserData();

    // zadanie 3

    function fillClasses() {
        const menu = document.querySelector('.ex3 ul');
        menu.classList.add('menu');

        const menuElement = document.querySelector('.ex3 ul li');
        Array.prototype.forEach.call(menuElement, element => {
            element.classList.add('menuElement');
        });

        const errorClass = document.querySelector('.error')
        Array.prototype.forEach.call(errorClass, element => {
            element.classList.remove('error');
        });
    }

    fillClasses();

    // zadanie 4

    function fillDataId() {
        let list = document.querySelectorAll('.ex4 ul li');

        for (let index = 0; index < list.length; index++) {
            list[index].setAttribute('data-id', index + 1);
        }
        return list;
    }
    console.log(fillDataId())
});