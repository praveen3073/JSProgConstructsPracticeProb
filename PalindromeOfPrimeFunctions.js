function getPalindrome(num){
    let reverseOfNum = 0;
    let number=num;
    while(num > 0){
        let digit = num % 10;
        reverseOfNum = reverseOfNum * 10 + digit;
        num=Math.floor(num/10);
    }
    console.log("The palindrome of " + number + " is " + reverseOfNum);
    return reverseOfNum;
}

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

function checkPrimePalindromePrime(number) {
    var primeFlag = checkPrime(number);
    if(primeFlag == 1)
        checkPrime(getPalindrome(number));
}

checkPrimePalindromePrime(20);
checkPrimePalindromePrime(17);
checkPrimePalindromePrime(200);
checkPrimePalindromePrime(23);