function getSum(numbers){
    let sum =  0;
    for(let i = 0; i<numbers.length;i++){
         const  index = i;
         const element =  numbers[i];
         sum += element;
        // console.log(index,element,sum);

    }

}
function getOddNumberArray(numbers){
    const getOddNumber = [];
    for (let i = 0; i<numbers.length; i++){
        index= i;
        element = numbers[i];
       
        if(element % 2 != 0 ){
         console.log(index, element);    
         getOddNumber.push(element);
        }
    }
    return getOddNumber;
}


const myNumbers = [12, 65, 45, 78, 32,45,91]

getSum(myNumbers);
const  OddNumber= getOddNumberArray(myNumbers);
console.log(OddNumber);