// Zadanie nr 1
function countHello(value) {
    licznik = 1;
    hello = setInterval(function() {
        if (licznik == value) {
            clearInterval(hello);
            console.log('Interwał usuniety');
            return;
        }
        console.log("Hello " + licznik);
        licznik++;
    }, 1000);
}

countHello(5);