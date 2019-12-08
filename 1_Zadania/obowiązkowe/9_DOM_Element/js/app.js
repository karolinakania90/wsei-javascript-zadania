document.addEventListener("DOMContentLoaded", function() {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    /*
    Poniżej napisz kod rozwiązujący zadania
     */


    // zadanie 0

    var getDatasInfo = function(elements) {
        let result = [];
        for (var i = 0; i < elements.length; i++) {
            console.log(elements[i]);
            let color = elements[i].getAttribute("data-color");
            result.push(color);
        }
        return result;

    }
    var test = getDatasInfo(links);
    console.log(test);


    // zadanie 1
    console.log("homeElement");

    console.log(homeElement);
    console.log(banner);
    console.log(links);
    console.log(blocks);
    console.log(childElements);
    for (var i = 0; i < childElements.length; i++) {
        console.log(childElements[i].tagName + " " + childElements[i].getAttribute("class"));

    }
    for (var i = 0; i < blocks.length; i++) {
        console.log(blocks[i].tagName + " " + blocks[i].getAttribute("class"));

    }
    for (var i = 0; i < links.length; i++) {
        console.log(links[i].tagName + " " + links[i].getAttribute("class"));

    }

    // zadanie 2

    for (var i = 0; i < blocks.length; i++) {

        console.log(blocks[i].innerHTML); // zwraca kod HTML będący wewnątrz tagu.
        console.log(blocks[i].outerHTML); // zwraca kod HTML wraz z tagiem.

        // podmieni linki na tekst poniżej
        blocks[i].innerHTML = "Nowa wartość diva o klasie blocks";
        console.log(blocks[i].innerHTML);

    }

    // zadanie 3

    var mainFooter = document.getElementById("mainFooter");


    function getId(element) {
        return element.id;
    }


    var id = getId(mainFooter);
    console.log(id);

    // zadanie 4

    var getTags = function(childElements) {
        let result = [];
        for (var i = 0; i < childElements.length; i++) {
            result.push(childElements[i].tagName);
        }
        return result;
    }

    var childTags = getTags(childElements);
    console.log(childTags);


    // zadanie 5

    var getClassInfo = function(element) {
        return element.classList;
    }

    var bannerClassInfo = getClassInfo(banner);
    console.log(bannerClassInfo);

    // zadanie 6

    var li = document.querySelectorAll("nav li");
    console.log(li);


    var setDataDirection = function(elements) {
        for (var i = 0; i < elements.length; i++) {
            var temp = elements[i].getAttribute("data-direction");
            if (temp == null) {
                elements[i].setAttribute("data-direction", "top");
            }
        }
    };

    setDataDirection(li);
    var li = document.querySelectorAll("nav li");
    console.log(li);
});