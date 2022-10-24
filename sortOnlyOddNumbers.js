function sortArray(array) {
    let arrSort = [];
  
    for (num of array) {       // ищем нечетные числа и закидываем их в пустой массив
        if (num % 2 != 0) {
            arrSort.push(num);
        }
    }
    arrSort.sort((a, b) => a - b);           // сортируем массив нечетных чисел
  
    let i = 0;
    for (let j = 0; j < array.length; j++) { // снова ищем нечетные и меняем их по-порядку на числа из отсортированного массива
        if (array[j] % 2 != 0) {             
            array[j] = arrSort[i];
            i++;                             // счетчик нужен только для перебора отсортированного массива нечетных чисел
        }
    }
    return array;
}
console.log(sortArray([4, 5, -3, 2, -1, 1, 4]));
