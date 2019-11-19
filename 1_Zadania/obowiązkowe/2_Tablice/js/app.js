// zadanie 0

function distFromAverage(tab) {
    let sum = 0;
    for (let x of tab) {
        sum += x;
    }

    let srednia = sum / tab.length;
    console.log(srednia);

    let tab2 = [];
    for (let v of tab) {
        tab2.push(srednia - v);
    }

    console.log(tab2);
}

distFromAverage([1, 2, 3, 4, 5, 6, 7]);

// zadanie 1
function mojeOwoce() {
    let owoce = ["jabłko", "gruszka", "banan"];
    console.log(owoce[0]);
    console.log(owoce[owoce.length - 1]);

    for (i = 0; i < owoce.length; i++) {
        console.log(owoce[i]);
    }
}

mojeOwoce();

// zadanie 3

function printTable(tab) {
    for (i = 0; i < tab.length; i++) {
        console.log(tab[i]);
    }
}
printTable(["fasola", "por", "marchew"]);

// zadanie 4

function multiply(tab) {
    let result = 1;
    for (i = 0; i < tab.length; i++) {
        result = result * tab[i];
    }
    return result;
}
console.log(multiply([1, 2, 3, 4]));


// zadanie 6

function sortArray(tab) {
    let tablica = tab;
    tablica.sort((a, b) => a - b);
    return tablica;
}

console.log(sortArray([145, 11, 3, 64, 4, 6, 10]));