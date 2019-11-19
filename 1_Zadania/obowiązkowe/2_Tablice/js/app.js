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