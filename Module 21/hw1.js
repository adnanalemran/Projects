function getTopStudent(student1, student2, student3) {
    if (student1 > student2 && student1 > student3) {
        return "student1";
    } else if (student2 > student1 && student2 > student3) {
        return "student2";
    } else {
        return "student3";
    }
}

const classTopper = getTopStudent(98, 95, 89);
console.log(classTopper);

function maxNumber(num1,num2,num3){
    mxNum =Math.max(num1,num2,num3);
    return mxNum;
}
console.log( maxNumber(41,45,88));

function minNumber(num1,num2,num3){
    mnNumber = Math.min(num1,num2,num3);
    return mnNumber;
}
console.log(minNumber(41,45,88));