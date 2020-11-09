const prompt = require('prompt-sync')();

var num = Math.floor(Math.random() * 100) + 1;
let max = 100;
let min = 0;
console.log("Generated number: " + num);
let mid = 50;
while(num != mid){
    mid = Math.floor(((min+max)/2));
    if(num < mid){
        max = mid;
        console.log(num + " is less than " + mid);
    }
    else if(num > mid){
        min = mid;
        console.log(num + " is more than " + mid);
    }
}
console.log("Found " + mid);