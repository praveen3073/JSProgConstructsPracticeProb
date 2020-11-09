const prompt = require('prompt-sync')();

let balance = 100;
let betsWon = 0;
let noOfBets = 0;

while(balance != 0 && balance < 200) {
    var bet = Math.floor(Math.random() * 100) % 2;
    if(bet == 0) {
        balance++;
        betsWon++;
    }
    else {
        balance--;
    }
    noOfBets++;
}
console.log("Number of bets placed: " + noOfBets);
console.log("Number of bets won: " + betsWon);
console.log("Current balance: " + balance);