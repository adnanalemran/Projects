const products = [
    {id:1, name:'lenevo',price:6500},
    {id:2, name:'dell',price:4500},
    {id:3, name:'hp',price:4000},
    {id:4, name:'mac',price:15000},
]
//map
const names = products.map(products=> products.name);
// console.log(names);

// for each 
// products.forEach(p => console.log(p.price))

//filter
const expancive =products.filter(p=>p.price>5000)
// console.log(expancive);

//find
const affordable = products.find(p=> p.price < 50000);
// console.log(affordable);

// reduce 
const total = products.reduce((acum , current) => acum+current.price,0);
console.log(total);