var Robot = function(name) {
    this.name = name;
    this.isFunctional = true;
}

Robot.prototype.sayHi = function(toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    } else {
        console.log("Robot " + this.name + " is broken");
    }
};

Robot.prototype.changeName = function(newname) {
    console.log("Robot " + this.name + " changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function() {
    this.isFunctional = true;
    console.log("Robot " + this.name + " was fixed");
};

Robot.prototype.isPanda = false;

Robot.prototype.checkType = function() {
    if (this.isPanda === true) {
        console.log("Type is panda!");
    } else {
        console.log("Type is not panda!");
    }
};

var myRobot = new Robot("cyborg");
console.log(myRobot.name);

myRobot.sayHi("Karolina");
myRobot.isFunctional = false;
myRobot.sayHi("Karolina");
myRobot.fixIt();
myRobot.sayHi("Karolina");
myRobot.changeName("Cyborg 2");
myRobot.sayHi("Karolina");

var robotMatt = new Robot("Matt");
robotMatt.sayHi("Karolina");
robotMatt.checkType();


var pandaRobot = new Robot("Pandabot");
pandaRobot.isPanda = true;
pandaRobot.sayHi("Karolina");
pandaRobot.checkType();