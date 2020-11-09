function CToF(Ctemp) {
    if(temp < 0 || temp > 100)
        console.log(Ctemp + " celcius temperature not in range");
    else
        console.log(Ctemp + " celcius to " + (Ctemp * 9/5) + 32) + " fahrenheit";
}

function FToC(Ftemp) {
    if(temp < 32 || temp > 212)
        console.log(Ftemp + " fahrenheit temperature not in range");
    else
        console.log(Ftemp + " fahrenheit to " + (Ftemp - 32) * 5/9) + " celcius";
}

var choice = Math.floor(Math.random() * 300) % 2;
switch(choice) {
    case 0:
        var temp = Math.floor(Math.random() * 100);
        CToF(temp);
        break;
    case 1:
        var temp = Math.floor(Math.random() * 100);
        FToC(temp);
}