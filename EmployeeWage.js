/* const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck) {
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArray = new Array();
while((totalEmpHrs<=MAX_HRS_IN_MONTH) && 
        (totalWorkingDays<NUM_OF_WORKING_DAYS)){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs=getWorkingHours(empCheck);
    totalEmpHrs = totalWorkingDays + empHrs;
    empDailyWageArray.push(calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);

console.log("Daily Wage Array: "+empDailyWageArray);
console.log("Emp hours: "+totalEmpHrs);
console.log("Emp wage: "+empWage)
console.log("Total working days: "+totalWorkingDays);
console.log("-------------UC6 Ended-------------");

// UC 7A
let totEmpWage = 0;
function sum(dailyWage){
    totEmpWage = totEmpWage + dailyWage;
}

empDailyWageArray.forEach(sum);
console.log("Total Days: "+totalWorkingDays);
console.log("Total hrs: "+totalEmpHrs);
console.log("Total Emp Wage: "+totEmpWage); */

let keyString = "Pooja";
let keyObject = {};
let keyFunc = function() {};


let myMap = new Map();
myMap.set(keyString, "Value associated with Pooja");
myMap.set(keyObject, "Value associated with keyObject");
myMap.set(keyFunc, "Value associated with keyFunc");

console.log(myMap.size);
console.log(myMap.get(keyString));
console.log(myMap.has("Pooja"));

for(let [key, value] of myMap)
    console.log("Key: " + key + ", Value: " + value);

for(let [key,value] of myMap){console.log("Loop1:  " + key + "   Value:  " + value)}
console.log("\n")

for(let [key,value] of myMap.entries()){console.log("Loop2:  " + key + "   Value:  " + value)}
console.log("\n")

for(let key of myMap.keys()){console.log("Loop3:  " + key)}
console.log("\n")

for(let value of myMap.values()){console.log("Loop4:  " + value)}
console.log("\n")

let first = new Map([[1,'one'], [2, 'two'], [3,'three']])
let second = new Map([[1,'un'], [2,'dois']])
let merged = new Map([...first, ...second])

console.log(first)
console.log(second)
console.log(merged)