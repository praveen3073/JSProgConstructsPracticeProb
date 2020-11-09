const prompt = require('prompt-sync')();

const DATE_LOWER = new Date("2020-3-20");
const DATE_UPPER = new Date("2020-6-20");

var date = new Date(prompt("Enter date: ", "2020-3-20"));
console.log("Date entered by you: " + date);

if(date >= DATE_LOWER && date <=DATE_UPPER)
    console.log("Inserted date in range");
else
    console.log("Inserted date outside range");