// zadanie 0

var car = {
    brand: "Mercedes",
    color: "Czarny",
    numberOfKilometers: 0,
    printCarinfo: function() {
        console.log(this.color + " " + this.brand + ", " + this.numberOfKilometers + "km");
    },
    drive: function(km) {
        this.numberOfKilometers += km;
    }
};

car.printCarinfo();
car.drive(20);
car.printCarinfo();

// zadanie 1

car.inspections = ["22-11-2019", "22-11-2018"];
car.addInspection = function(date) {
    this.inspections.push(date);
}
car.getInspections = function() {
    return this.inspections;
}

car.addInspection("22-11-2020");
console.log(car.getInspections());