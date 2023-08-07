function whoTopper(numbers){
    let topperNumber = numbers[0];
    for(let i = 0 ; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        // console.log(index,element);
        if(topperNumber > element){
            topperNumber = element
        }
    }
    return topperNumber;
}





const studentNumber = [85,78,57,88,54,58,88,78,];
const topper = whoTopper(studentNumber);
console.log("toper number is ",topper);