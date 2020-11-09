const prompt = require('prompt-sync')();

var number = prompt("Enter a number: ");

var count = number.length; 

switch(count){
    case 1: 
        console.log("Units");
        break;
    case 2:
        console.log("Tens");
        break;
    case 3:
        console.log("Hundreds");
        break;
    case 4:
        console.log("Thousands");
}