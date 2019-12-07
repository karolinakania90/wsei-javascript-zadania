document.addEventListener("DOMContentLoaded", function() {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */

    // zadanie 0

    getDataAnimation = function(element) {
        var title = element.getAttribute('data-animation');
        return title;
    }
    getDataAnimation(document.getElementsByClassName("title")[0]);

    // zadanie 1
    // sposob 1
    var home1 = document.getElementById('home');
    console.log(home1);

    home1.querySelector('.block');
    // sposob 2
    var home2 = document.querySelector("#home");
    console.log(home2);

    var liFirst = document.querySelector('li[data-direction]');
    console.log(liFirst);

    var block = home1.querySelector('.block');

    console.log(block);

    // zadanie 2

    var nav = document.querySelector("nav");
    var lis = nav.getElementsByTagName("li");
    console.log(lis);

    var p = document.querySelectorAll("div p");
    console.log(p);

    var divs = document.querySelectorAll("article div");
    console.log(divs);

    // zadanie 3

    var tag = document.querySelector("article[class=first]");
    console.log(tag);

    var h1 = tag.getElementsByTagName("h1");
    console.log("h1 total: " + h1.length);

    var h2 = tag.getElementsByTagName("h2");
    console.log("h2 total: " + h2.length);
});