function multiSum(numbers) {
    let result = 1;
    for (let i = numbers; i >= 1; i--) {
        result *= i;
    }
    return result;
}

const result = multiSum(7);
console.log(result);
array.forEach(element => {
    
});