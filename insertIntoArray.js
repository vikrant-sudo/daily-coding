const obj = { a: 1, b: 2, c: 3 };
let outputArray = []
function insertIntoArray(obj){
    for (let key in obj) {
        outputArray.push({[key]: obj[key]})
    }
    return outputArray
}
insertIntoArray(obj)
console.log(outputArray)