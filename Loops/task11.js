//program to read 5 numbers and print only even numbers
// Initialize a counter to keep track of how many numbers we've read
let count = 0;

// Loop until we've read 5 numbers
while (count < 5) {
  // Prompt the user to enter a number
  let num = parseInt(prompt(`Enter number ${count+1}:`));
  
  // Check if the number is even
  if (num % 2 === 0) {
    console.log(num);
  }
  
  // Increment the counter
  count++;
}