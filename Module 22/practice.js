// Problem 1
function feetToInch(feet){
    inch = feet * 12 ;
    return inch;
}

// Problem 2
function centimeterToMeter(cm){
    const meter = cm / 100;
    return meter;
}

// Problem 3
function paperRequirements(book1,book2,book3){
    const requarebook1 = 100;
    const requarebook2 = 200;
    const requarebook3 = 300;
    const forBook1 = requarebook1*book1; 
    const forBook2 = requarebook2*book2; 
    const forBook3 = requarebook3*book3; 
    const totalPage = forBook1+forBook2+forBook3;
    return totalPage;
}

// Problem 4 
function bestFriend(name){
    let largest = name[0];
    for(let i = 0; i < name.length; i++){
        const element = name[i];
        if(element.length > largest.length){
            largest = element;
        }
    }
    return largest;
}

const friendList = ["sajid", "mamun", "kamal", "jubayer bin rased", "chinku"];
console.log(bestFriend(friendList)); // Example usage

// Problem 5
function onlyProsative(number){
    let positiveArray = [];
    for (let i = 0; i < number.length; i++){
        const element = number[i];
        if(element > 0){
            positiveArray.push(element);
        }
        else{
            break;
        }
    }
    return positiveArray;
}

const numberArray = [45, 87, 96, 11, 63, -43, 45, 23, 45];
console.log(onlyProsative(numberArray)); // Example usage
