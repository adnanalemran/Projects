const names = ["abul","babul","cabul","dabul","ebul","babul","abul","kabul"];

function removeDublicat(names){
    const unique = [];
    for (i=0; i<names.length; i++){
        const name = names[i];
        if(unique.includes(name)=== false){
            unique.push(name);
        }
    }
    return unique;
}

const uniqueName =  removeDublicat(names);
console.log(uniqueName);