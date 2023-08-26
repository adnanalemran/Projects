const numbers = [1,3,43,43]; 
const player = [75,65,34,54,86]

// const selected = player.filter(p=> p > 70);
const selected = player.filter(p=> p%2 ===1);
console.log(selected);