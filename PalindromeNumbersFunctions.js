function checkPalindrome(num1,num2){
    if(num1.toString().length != num2.toString().length) {
        console.log(num1 + " and " + num2 + " are NOT Palindromes");
        return;
    }
    let reverseOfNum1 = 0;
    let num = num1;
    while(num > 0){
        let digit = num % 10;
        reverseOfNum1 = reverseOfNum1 * 10 + digit;
        num = Math.floor(num / 10);
    }
    if(reverseOfNum1 == num2) 
        console.log(num1 + " and " + num2 + " are Palindromes");
    else 
        console.log(num1 + " and " + num2 + " are NOT Palindromes");
}
checkPalindrome(12,322);
checkPalindrome(256,652);
checkPalindrome(141,414);
checkPalindrome(404,404); 