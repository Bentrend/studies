function order(words) {
  let resultArray = [];
  if (words === "") {return ""}
  words.split(" ").map((item) => resultArray[item.match(/\d+/) - 1] = item);
  return resultArray.join(" ");
}
console.log(order("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est"
