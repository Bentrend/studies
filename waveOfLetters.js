function wave(str) {
  if (str == "") {return []};               // исключение!
  let string = str.toLowerCase();           // приводим все в нижний регистр, чтобы сразу исключить заглавные буквы в строке
  let result = [];                          // результирующий массив
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {                 // пропускаем пробелы
      continue;                             // переходим к следующей итерации
    }
    result.push(
      string.slice(0, i) + string[i].toUpperCase() + string.slice(i + 1) // склеиваем строку и отправляем в результат
    );
  }
  return result;
}

console.log(wave("codewars"));   //['Codewars', 'cOdewars', 'coDewars', 'codEwars', 'codeWars', 'codewArs', 'codewaRs', 'codewarS']
