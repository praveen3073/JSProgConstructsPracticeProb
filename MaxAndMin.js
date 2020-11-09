let num1 = 100 + Math.floor(Math.random()*100);
let num2 = 100 + Math.floor(Math.random()*100);
let num3 = 100 + Math.floor(Math.random()*100);
let num4 = 100 + Math.floor(Math.random()*100);
let num5 = 100 + Math.floor(Math.random()*100);
console.log("num1: " + num1 + ", num2: " + num2 + ", num3: " + num3 + ", num4: " + num4 + ", num5:" + num5);

//Find Maximum
let max = num1;
if(num2>max)
    max = num2;
if(num3>max)
    max = num3;
if(num4>max)
    max = num4;
if(num5>max)
    max = num5;
console.log("max: " + max);

//Find Minimum
let min = num1;
if(num2<min)
    min = num2;
if(num3<min)
    min = num3;
if(num4<min)
    min = num4;
if(num5<min)
    min = num5;
console.log("min: " + min);