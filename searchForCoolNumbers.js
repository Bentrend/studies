// поиск чисел, цифры которых возведенные в степень своей позиции дают само число
// пример - 89 = 8^1 + 9^2, 135 = 1^1 + 3^2 + 5^3

function sumDigPow(a, b) {
  let result = []; // объявляем рузультирующий массив
  let arrNum = []; // обявляем пусто массив для заполнения числами из заданного диапазона от a до b
  
  for (let i = a; i <= b; i++) { // заполняем массив числами из диапазона
    arrNum.push(i);
  }
  
  for (let j = 0; j < arrNum.length; j++) { // цикл перебирает каждое число из диапазона и приводит его к строке
    let strNum = arrNum[j].toString();
    let numPow = 0;                         // объявлем переменную, в которую будем заносить цифры возведенные в соответствующую степень
    
    for (let i = 0; i < strNum.length; i++) { // проходим по каждой цифре, возводим ее в нужную степень и складываем в переменную выше
      numPow += Math.pow(strNum[i], i + 1);
    }
    if (arrNum[j] == numPow) {                // сравниваем сумму цифр в степенях, и если подходит бросаем в результирующий массив
      result.push(arrNum[j]);
    }
  }
  return result;
}
console.log(sumDigPow(1, 100000)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 135, 175, 518, 598, 1306, 1676, 2427]
