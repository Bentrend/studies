function dayTemp(array) {
    let arrayTemp = [];
    //объявляем результирующий пустой массив

    for (let i = 0; i < array.length; i++) {
        if (i == array.length - 1) {
            arrayTemp.push(0); // для последнего дня отправляем 0
        }
        for (let j = i + 1; j < array.length; j++) {   //j - отсчитывает количество дней пока температура не увеличится 
            if (array[j] > array[i]) {
                arrayTemp.push(j - i); // отправляем в конец пустого массива кол-во дней
                break; // останавливаем цикл
            }
            if (j == array.length - 1) {
                arrayTemp.push(0);
            }
        }
    }
    return arrayTemp;
}
let array = [12, 3, 1];     // массив температур дней
console.log(dayTemp(array)); 
//получаем массив из кол-ва дней до потепления для каждого дня
// если температура больше не поднимается, то возвращаем 0 для каждого дня ([0, 0, 0])
