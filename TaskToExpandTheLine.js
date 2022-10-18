function reverseWords(str) {
    let arrLast = [];
    let arr = str.split(" ");

    for (let item of arr) {
        let arrTwo = item.split("");
        arrTwo.reverse();

        let strStr = arrTwo.join("");
        arrLast.push(strStr);
    }
    let strLast = arrLast.join(" ");
    return strLast;
}
console.log(reverseWords("qwer tyui"));

