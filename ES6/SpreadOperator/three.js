let mArr1 = [1, 2, 3, 4, 5]
let mArr2 = [...mArr1] //creates a copy of mArr1
console.log(mArr2)

let arr1 = [3, 4, 5, 6, 7]
let arr2 = [4, 5, 6]
let arr3 = [...arr1, ...arr2]
let arr4 = [0, ...arr2, ...arr1, 9]

console.log(arr3)
console.log(arr4)

let obj1 = {
    mname: 'John',
    mage: 45
}
let obj2 = {
    fname: 'Margrate',
    fage: 40
}
let obj4 = {
    name: 'John',
    age: 45
}
let obj5 = {
    name: 'Margrate',
    age: 40
}
let obj3 = {...obj1, ...obj2}
let obj6 = {...obj4, ...obj5}
console.log(obj3)
console.log(obj6)