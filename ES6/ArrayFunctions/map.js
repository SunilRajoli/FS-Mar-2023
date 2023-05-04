//without map function
const mArr = [1, 2, 4, 5, 6]
/*let newArr = []
for(i = 0; i < mArr.length; i++){
    newArr.push(mArr[i]*2)
}
console.log(newArr)*/
//with map function
let newArr1 = mArr.map((item, ) => {
    console.log(item)
    //return item*2
})
console.log(newArr1)

const mArray = [
    {
        name: 'John Lark',
        experience: 10,
        type: 'Commercial'
    },
    {
        name: 'Margrate',
        experience: 12,
        type: 'private'
    },
    {
        name: 'Taylor',
        experience: 20,
        type: 'Commercial'
    }

]
let newArray = mArray.map((data, pos) => {
    console.log(data)
    return {
        name: data.name,
        experience: data.experience
    }
})
console.log(mArray)
console.log(newArray)