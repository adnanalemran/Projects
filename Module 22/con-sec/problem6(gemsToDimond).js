function gemsToDiamond(friend1, friend2, friend3) {
    if (typeof friend1 !== 'number' || typeof friend2 !== 'number' || typeof friend3 !== 'number') {
        return "Invalid input. Please provide valid numbers for all friends.";
    }

    friend1 = friend1 * 21;
    friend2 = friend2 * 32;
    friend3 = friend3 * 43;
    const totalGems = friend1 + friend2 + friend3;
    const value = 1000 * 2;

    if (totalGems > value) {
        result = totalGems - value;
        return result;
    } else {
        return totalGems;
    }
}

const result5 = gemsToDiamond(1, 1, 1);
console.log(result5);
