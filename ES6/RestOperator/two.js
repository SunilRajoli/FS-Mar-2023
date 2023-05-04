

//const mSum = (...args) => console.log(args)

const mSum = (num1, num2, ...args) => {
    console.log(num1)
    console.log(num2)
    console.log(args)
    let sum = 0
    for(i = 0; i < args.length; i++){
        sum += args[i]
    }
    console.log(sum)
}

mSum(1, 2, 3, 4, 5, 6)

