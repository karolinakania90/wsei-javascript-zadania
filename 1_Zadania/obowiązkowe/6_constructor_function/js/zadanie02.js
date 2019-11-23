var Calculator = function() {
    this.history = [];
};

Calculator.prototype.add = function(num1, num2) {
    let sum = num1 + num2;
    let result = "added " + num1 + " to " + num2 + " got " + sum;
    this.history.push(result);
    return sum;
}

Calculator.prototype.multiply = function(num1, num2) {
    let multiply = num1 * num2;
    let result = "multipled " + num1 + " with " + num2 + " got " + multiply;
    this.history.push(result);
    return multiply;
}

Calculator.prototype.subtract = function(num1, num2) {
    let subtract = num1 - num2;
    let result = "subtracted " + num1 + " from " + num2 + " got " + subtract;
    this.history.push(result);
    return subtract;
}

Calculator.prototype.divide = function(num1, num2) {
    let divide = num1 / num2;
    let result = "divided " + num1 + " by " + num2 + " got " + divide;
    this.history.push(result);
    return divide;
}

Calculator.prototype.printOperations = function() {
    console.log(this.history);
}

Calculator.prototype.clearOperations = function() {
    this.history = [];
}

var myCalculator = new Calculator();
var result = myCalculator.add(5, 6);
console.log(result);

myCalculator.divide(20, 5);
myCalculator.printOperations();
myCalculator.clearOperations();
myCalculator.printOperations();