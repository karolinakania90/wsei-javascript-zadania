// zadanie 0
function checkArray(array) {
    let outputArray = [];
    array.forEach(element => {
        if (element[0] % 2 == 0 && element[1] % 2 == 0) {
            outputArray.push(true);
        } else {
            outputArray.push(false);
        }
    })
    console.log(outputArray);
}
checkArray([
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
]);

// zadanie 1
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

function printArray(task1Array) {
    console.log(task1Array[3][2])
    console.log(task1Array[2].length)
    console.log(task1Array[4][2])
};

printArray(task1Array);

// zadanie 2
var task2array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

function printTask2array(task2array) {
    for (var i = 0; i < task2array.length; i++) {
        console.log(i);
    }
    for (var i = 0; i < task2array.length; i++) {
        console.log(task2array[i]);
    }
    for (var i = 0; i < task2array.length; i++) {
        for (var j = 0; j < i.length; j++) {
            console.log(task2array[j]);
        }
    }
}
printTask2array(task2array);

// zadanie 3 
function print2DArray(array) {
    array = []
    for (var i = 0; i < array.length; i++) {
        array.push(i);
        for (var j = 0; j < i.length; j++) {
            array.push(j);
            return array[i][j];
        }
    }
}
console.log(print2DArray([
    [1, 2],
    [3, 4]
]));

// zadanie 4 
var new2Darray = [
    [1, 2, 3, 4],
    ['chleb', 'bulka', 'maslo', 'szynka', 'ser'],
    ['herbata', 'kawa', 'cukier', 'chipsy'],
    [5, 6, 7, 8, 9]
];


function print2DArray(array2D) {
    for (var i in array2D) {
        console.log(array2D[i]);
    }
}
print2DArray(new2Darray);

// zadanie 5
function create2DArray(rows, columns) {
    let array2D = [];
    var k = 0;
    for (let i = 0; i < rows; i++) {
        let array = [];
        for (let j = 0; j < columns; j++) {
            k++;
            array.push(k);
        }
        array2D.push(array);
    }

    console.log(array2D);
}
create2DArray(4, 4);