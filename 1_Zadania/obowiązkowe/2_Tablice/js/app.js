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