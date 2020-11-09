const prompt = require('prompt-sync')();

let tailCount = 0;
let headCount = 0;

while(tailCount <= 11 && headCount <=11) {
    var coinFlip = Math.floor(Math.random() * 100) % 2;
    if(coinFlip == 0) {
        tailCount++;
        console.log("Tail won");
    } 
    else {
        headCount++;
        console.log("Head won");
    }
}