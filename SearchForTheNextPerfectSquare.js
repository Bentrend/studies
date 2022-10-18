function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {
        while (!Number.isInteger(Math.sqrt(++sq))) {};
        return sq;
    }
    return sq;
}

console.log(findNextSquare(9));
