/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//deklaracja funkcji `jeden()` 
function jeden() {

    //deklaracja zmiennej `zmienna1` - dostępna w obu funkcjach - funkcja `jeden()` jest nadrzędna do funkcji `dwa()`
    var zmienna1 = 1;

    //deklaracja funkcji `dwa()` - funkcja jest zagnieżdżona w funkcji `jeden()` - wszystkie zmienne utworzone w funckji `jeden()` będą dostępne w obu funkcjach
    function dwa() {

        //wywołanie w konsoli zmiennej `zmienna1` - dostępna ponieważ została zainicjowana w funkcji nadrzędnej
        console.log(zmienna1);

        //deklaracja zmiennej `zmienna2` - dostępna tylko w funkcji zagnieżdżonej `dwa()`
        var zmienna2 = 3;
    }

    //wywołanie funkcji zagnieżdżonej `dwa()`
    dwa();

    //wywołanie w konsoli zmiennej `zmienna2` - niedostępna ponieważ zainicjowana w funkcji zagnieżdżonej `dwa()`
    console.log(zmienna2)
}

//wywołanie funkcji zagnieżdżonej `jeden()`
jeden();