// variable
var deposit = 500;

// condition in 6 delse if ferent way

if (deposit > 500) {

}

else if (deposit < 300) {

}

else if (deposit == 500) {

}

else if (deposit != 200) {

}

else if (deposit <= 300) {

}

else if (deposit >= 600) {

}

else {

}

// array

// checking the elements of numbers in the array

const numbers = [3, 12, 15, 7, 546, 12, 11, 54]

const countNumbers = numbers.length;

// to add new elements in last of array

const pushNumbers = numbers.push(111);

// to kick of any elements in the array .use pop

const popNumbers = numbers.pop();

// to change any element in the array

const changeNumbers = numbers[2] = 555;

console.log(changeNumbers);

// to check any specific elements is available in the array or not

if (numbers.indexOf(546) != -1) {

}

// same thing can be done using includes

if (numbers.includes(12) != -1) {

}

// while, for, for of loop. for of loop is used in the most case

for (number of numbers) {

}

// use of function

function fullName(first, second) {
    const name = first + ' ' + second;
    return name
}

const addingFullName = fullName('akil', 'injamam');

console.log(addingFullName)


// object

const bottle = {
    color: 'green',
    price: 200,
    brand: 'bangladesh',
    contain: 'water'
}


