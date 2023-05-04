function greetings(name){
    return ('Welcome '+name)
}

const mGreetings = (name, age) => {
    return `Welcome ${name} ${age}`
}

const mGreeting = name => `Welcome ${name}`

console.log(greetings('John'))
console.log(mGreetings('Marky', 28))
console.log(mGreeting('William'))