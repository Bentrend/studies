function alphabetPosition(text) {
    // заменить строку на код каждоой буквы

    let checkPointStart = "a".codePointAt(0);
    let checkPointEnd = "z".codePointAt(0);
    let result = "";

    let str = text.toLowerCase();

    for (char of str) {
        if (
            char.codePointAt(0) >= checkPointStart &&
            char.codePointAt(0) <= checkPointEnd
        ) {
            result += char.codePointAt(0) - checkPointStart + 1 + " ";
        }
    }
    return result.slice(0, result.length - 1);
}
