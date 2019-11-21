// zadanie 0a

var city = {
    capital: "Kraków",
    population: 900000,
    president: "Majchrowski",
    primeMinisters: ["Jan", "Anna"]
};

console.log(city.capital);
console.log(city.population);
console.log(city.president);
console.log(city.primeMinisters);

// zadanie 0b

var timeMachine = {
    shape: "round",
    model: "mx2000",
    run: function(date, place) {
        console.log(this.model + " startuje " + date + " do " + place);
    }
};
console.log(timeMachine.shape);
console.log(timeMachine.model);

timeMachine.run("2000-08-11", "Szkoła podstawowa");

// zadanie 1

var book = {
    title: "O pisaniu na chłodno",
    author: "Remigiusz Mróz",
    numberOfPages: 782
};

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

// zadanie 2

var person = {
    name: "Karolina",
    age: 29,
    sayHello: function() {
        console.log("hello");
    }
};

console.log(person.name);
console.log(person.age);

person.sayHello();

// zadanie 3

var szarlotka = {
    title: "Szarlotka",
    servings: 10
};

szarlotka.ingredients = ["jajka", "mąka", "jabłka"];


for (x in szarlotka) {
    console.log(szarlotka[x]);
}

// zadanie 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist = false;

if (spoon.isExist) {
    console.log("łyżka istnieje");
} else {
    console.log("łyżka nie istnieje");
}

