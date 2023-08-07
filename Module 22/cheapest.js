const phones = [
    {name:'samsang',camara:12,storage:'32gb',price:36000,color:'silver'},
    {name:'welton',camara:10,storage:'32gb',price:22000,color:'silver'},
    {name:'xumai',camara:32,storage:'6gb',price:46000,color:'silver'},
    {name:'realmi',camara:22,storage:'32gb',price:32000,color:'silver'},
    {name:'iphone',camara:12,storage:'4gb',price:86000,color:'silver'},
]
function cheapestPhone(phones){
    let lowesPhone = phones[0];
    for(let i = 0 ; i<phones.length; i++){
        let phone = phones[i];
        if(phone.price < lowesPhone.price){
            lowesPhone = phone;
        }
    }
    return lowesPhone;

}

const phone = cheapestPhone(phones);
console.log(phone);