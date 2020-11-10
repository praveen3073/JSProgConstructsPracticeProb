let numarr = new Array();

for(var i = 0; i < 10; i++) {
    numarr.push(Math.floor(Math.random() * 900 + 100));
}
console.log(numarr.toString());

// Find min, secondMin, max, secondMax without sorting array
let max = -1;
let secondMax = -1;
let min = 1000;
let secondMin = 1000;

for(var i = 0; i < numarr.length; i++) {
    if(numarr[i] > max) {
        secondMax = max;
        max = numarr[i];
    }
    else if(numarr[i] > secondMax)
        secondMax = numarr[i];
    if(numarr[i] < min) {
        secondMin = min;
        min = numarr[i];
    }
    else if(numarr[i] < secondMin)
        secondMin = numarr[i];
}

console.log("Maximum element: " + max);
console.log("Second maximum element: " + secondMax);
console.log("Minimum element: " + min);
console.log("Second minimum element: " + secondMin + "\n");

// Find min, secondMin, max, secondMax after sorting array
let sortednumarr = numarr.splice(0);
sortednumarr.sort();
min = sortednumarr[0];
max = sortednumarr[sortednumarr.length - 1];

console.log("Sorted array: " + sortednumarr.toString());
for(var i = sortednumarr.length-1; i >= 0; i--) {
    if(sortednumarr[i] != max) {
        secondMax = sortednumarr[i];
        break;
    }
}
for(var i = 0; i < sortednumarr.length; i++) {
    if(sortednumarr[i] != min) {
        secondMin = sortednumarr[i];
        break;
    }
}

console.log("Maximum element: " + max);
console.log("Second maximum element: " + secondMax);
console.log("Minimum element: " + min);
console.log("Second minimum element: " + secondMin + "\n");
