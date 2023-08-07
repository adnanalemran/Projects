function mindGame(x){
    if(typeof x !== "number" ){
        return "Provide a valid number"
    }
    else if(x<=0){
        return "provide a positive number"
    }
    else{
        const result = (((x*3)+10)/2)-5;
        return result;
    }

}
console.log(mindGame(5));