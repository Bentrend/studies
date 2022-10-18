function jordan(str) {
    let array = str.split(" ");
    let arrayText = [];
    
    for (let temp of array) {
        let text = temp[0].toUpperCase() + temp.slice(1);
        arrayText.push(text);        
    }
    
    return arrayText.join(" ");
}

let str = "How can mirrors be real if our eyes aren't real";
console.log(jordan(str));
