const prompt = require('prompt-sync')();

var number1 = parseInt(prompt("Enter number1: "));
var number2 = parseInt(prompt("Enter number2: "));
var number3 = parseInt(prompt("Enter number3: "));

var op1 = number1 + number2 * number3;
var op2 = number1 % number2 + number3;
var op3 = number3 + number1 / number2;
var op4 = number1 * number2 + number3;

let max = op1;
if(op2>max)
    max = op2;
if(op3>max)
    max = op3;
if(op4>max)
    max = op4;
console.log("max: " + max);

//Find Minimum
let min = op1;
if(op2<min)
    min = op2;
if(op3<min)
    min = op3;
if(op4<min)
    min = op4;
console.log("min: " + min);