const name = "Rajoli"
const mGreetings = `Hello ${name}`
console.log(mGreetings);

//using function
const firstName = "Mark"
const lastName = "Jones"
function getFullName(firstName, lastName){
    return `${firstName} ${lastName}`
}
const moreGreetings = `Hello ${getFullName(firstName, lastName) + 100}`
console.log(moreGreetings)

//rgba
let red = 200
let green = 155
let blue = 100
let alpha = 0.8
//const rgbaExp = 'rgba(' + red +',' + green +',' + blue +',' + alpha + ')'
//(or)
const rgbaExp = `rgba(${red}, ${green}, ${blue}, ${alpha})`
console.log(rgbaExp)