const arr= [{ a: 1 }, { b: 2 }, { c: 3 }];
let obj2={}
function insertIntoObject(arr){
    arr.forEach(element => {
        for (let key in element) {
            obj2[key]=element[key]
        }
    });
    return obj2
}
insertIntoObject(arr)
console.log(obj2)