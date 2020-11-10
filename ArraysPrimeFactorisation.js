function checkPrime(number) {
    for(var i = 2 ; i <= Math.floor(Math.sqrt(number)); i++) {
        if( number % i == 0) {
            console.log("Number " + number +" is not a prime number");
            return 0;
        }
    }
    console.log("Number " + number +" is a prime number");
    return 1;
}

let factors = [1];
let number = Math.floor(Math.random() * 100);
console.log("Generated number: " + number);

if(checkPrime(number) == 1) {
    factors.push(number);
}
else {
    for(var i = 2; number != 1;) {
        if(number % i == 0) {
            factors.push(i);
            number /= i;
        }
        else
            i++;
    }
}

console.log(factors.toString());