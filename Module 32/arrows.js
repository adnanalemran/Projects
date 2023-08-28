// function add (x,y){
//     const results  = x+ y;
//     return results;
// }
function printNUmber(x){
    console.log('value is ', x);
}

// printNUmber(20);

//now we start es6

// const add = (x,y) => {
//     const results =  x+y;
//     return results
// }


const add= (x,y)=> x+y;
 
console.log(add(2,3));

const showNumber = x => Math.pow(x,2);

console.log(showNumber(4));