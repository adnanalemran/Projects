function isLGSeven(num) {
    if (typeof num !== "number") {
        return "! This is Not a valid number";
    } 
    else{
    const results = num - 7;
    if (results < 7) {
        return results;
    } else {
        num2x = num * 2;
        return num2x;
    }
    }
}

console.log(isLGSeven(-15));