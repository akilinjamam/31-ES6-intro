const numbers = [12, 22, 25, 78, 21, 46];

//  console.log(numbers);

// use of 3 dot
// if you  want to find the biggest number from array use 3 dots.
const bigNumbers = Math.max(12, 11, 45, 33, 24, 28);
const bigNumbers2 = Math.max(...numbers);

// console.log(bigNumbers, bigNumbers2); 



numbers.push(57);
// console.log(numbers)


// const numbers2 = [numbers];
const numbers2 = [2, ...numbers, 59];

console.log(numbers2);
console.log(numbers)