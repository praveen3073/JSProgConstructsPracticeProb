let a = 10;
let b = 20;
let c = a + b;

console.log("addition of two numbers " + c);

let string1 = "10";
let string2 = "20";
let string3 = string1 + string2;

console.log("addition of two strings " + string3);

let date = new Date();
let today = "Today is " + (date.getMonth()+1)+"/"+(date.getDate())+"/"+(date.getFullYear());
let time = "Time is " + (date.getHours())+"/"+(date.getMinutes())+"/"+(date.getSeconds());
console.log(today);
console.log(time);