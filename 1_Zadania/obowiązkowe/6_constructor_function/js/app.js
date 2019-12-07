// zadanie 0

function Basket() {
    this.products = [];
    this.sum = 0;
    this.addProduct = function(name, price) {
        this.products.push({
            name: name,
            price: price
        });
        this.sum += price;
    };
    this.showBasket = function() {
        console.log(this.products);
        console.log(this.sum);
    }
}

var aliceBasket = new Basket();

aliceBasket.addProduct("pomidor", 10);
aliceBasket.addProduct("arbuz", 40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun", 50);
bruceBasket.addProduct("tofu", 20);
bruceBasket.showBasket();


// nauka własna

//pierwszy sposób tworzenia obiektu

var student = {
    name: "Jan",
    lastName: "Kowalski",
    age: 21,
    id: 11320,
    printData: function() {
        console.log(this.name + " " + this.lastName + " wiek " + this.age + " id: " + this.id);
    }
};
student.printData();

// rozszerzanie obiektu

student.city = "Kraków";
student.showCity = function() {
    console.log(this.city);
};
student.showCity();

// drugi sposób tworzenia obiektu - konstruktor

var University = function(name, studentNumber) {
    this.name = name;
    this.studentNumber = studentNumber;
    this.printData = function() {
        console.log(this.name + " | " + this.studentNumber);
    }
};
var politechnika = new University("PK", 3200);
politechnika.printData();

var wsei = new University("WSEI", 9000);
wsei.printData();
console.log(wsei);

// rozszerzanie obiektu

University.prototype.addStudent = function(number) {
    this.studentNumber += number;
};

politechnika.addStudent(100);
politechnika.printData();
wsei.addStudent(500);
wsei.printData();
console.log(wsei);


function printHello(parameter1, parameter2) {

    console.log("hello");
    return "hello";
}