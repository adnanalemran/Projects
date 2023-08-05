function findOddSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum; // Return the sum instead of printing it
}

function getOddNumbersofArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % 2 !== 0) {
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 6, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersofArray(myNumbers);
console.log(oddNumbers);

const oddNumberSum = findOddSum(oddNumbers);
console.log(oddNumberSum);
