function findingBadData(data) {
    if (!Array.isArray(data)) {
        return "Invalid input. Please provide an array.";
    }

    let negativeCount = 0;
    for (let i = 0; i < data.length; i++) {
        if(typeof data[i] !== 'number'){
            return "Invalid input. Please provide an array.";
        }
        else if (data[i] < 0) {
            negativeCount++;
        }
    }
    return negativeCount;
}

const age = [ 2, -5, -7, -13];
const negativeValues = findingBadData(age);
console.log(negativeValues);

