function count(string) {
    if (string.length == 0) {
        return {};
    }
    let map = new Map();

    for (let i = 0; i < string.length; i++) {
        if (map.get(string[i]) != undefined) {
            map.set(string[i], map.get(string[i]) + 1);
        } else {
            map.set(string[i], 1);
        }
    }

    return Object.fromEntries(map.entries());
}
console.log(count("abcdadbc@@"));
