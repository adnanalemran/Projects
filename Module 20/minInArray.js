function minInArray(numbers) {
    let lowest = numbers[0]; 
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
       

        if (element < lowest) {
            lowest = element;
        }
    }

    return lowest;
}

const lowest = [167, 190, 120, 165, 137];
const smallestPerson = minInArray(lowest);
console.log('Shortest Person is:', smallestPerson);
