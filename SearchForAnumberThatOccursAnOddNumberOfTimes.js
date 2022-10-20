function findOdd(A) {
    let map = new Map();

    A.forEach((key) => map.set(key, map.has(key) ? map.get(key) + 1 : 1));

    for (entries of map) {
        if (entries[1] % 2 != 0) {
            
            return entries[0];
        }
    }
}
console.log(findOdd([3,1,6,1,3,6,1,1,6]));
