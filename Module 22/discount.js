function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restRate = 80;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    } else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restRateQuantity = ticketQuantity - 100;
        const restRatePrice = restRateQuantity * second100Rate;
        const totalPrice = first100Price + restRatePrice;
        return totalPrice;
    } else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restRateQuantity = ticketQuantity - 200;
        const restRatePrice = restRateQuantity * restRate;
        const totalPrice = first100Price + second100Price + restRatePrice;
        return totalPrice;
    }
}

const price = ticketPrice(201);
console.log(price);
