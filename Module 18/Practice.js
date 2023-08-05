// var fruits = ["apple","Banana","orange"];

// var BananaIndex = fruits.indexOf('Banana');
// fruits[BananaIndex] = "mango";
// console.log(fruits);
var finditem="strobary";
var replace="strawberry"


var fruits = ["apple","Banana","orange"];
fruits.pop();
fruits.push("strobary");

 for (var i=0 ; i<fruits.length; i++){

    if(fruits.indexOf(finditem)){
        var BananaIndex = fruits.indexOf(finditem);
        fruits[BananaIndex] = replace;
    }
    console.log(fruits[i]);
 }
