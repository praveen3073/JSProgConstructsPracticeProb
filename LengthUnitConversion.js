const prompt = require('prompt-sync')();

console.log("1. Feet to inch \n" +
"2. Feet to meter \n" + 
"3. Inch to feet \n" +
"4. Meter to feet");
var choice = parseInt(prompt("Enter your choice: "));
switch(choice) {
    case 1:
        var length = parseFloat(prompt("Enter length in feet: "));
        console.log("Length in inches: " + length * 12);
        break;
    case 2:
        var length = parseFloat(prompt("Enter length in feet: "));
        console.log("Length in meter: " + length * 12 * 2.54 / 100);
        break;
    case 3:
        var length = parseFloat(prompt("Enter length in inch: "));
        console.log("Length in feet: " + length / 12);
        break;
    case 4:
        var length = parseFloat(prompt("Enter length in meter: "));
        console.log("Length in feet: " + (length * 100) / (2.54 * 12));
        break;
    default:
        console.log("Incorrect choice");
}
