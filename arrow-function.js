// normal function

function add(num1, num2) {
    const total = num1 + num2;
    return total
}

// normal function without using const under function with using only return

function add2(num1, num2) {
    return num1 + num2
}

// function expression

const add3 = function add3(num1, num2) {
    return num1 + num2
}

// function expression (annonymous);

const add4 = function (num1, num2) {
    return num1 + num2;
}

// arrow function 

const add5 = (num1, num2) => num1 + num2

const totalResult = add(12, 15)
const totalResult2 = add2(12, 15);
const totalResult3 = add3(12, 15);
const totalResult4 = add4(12, 15);
const totalResult5 = add5(12, 15);

console.log(totalResult)
console.log(totalResult2)
console.log(totalResult3)
console.log(totalResult4)
console.log(totalResult5)

console.log(totalResult, totalResult2, totalResult3, totalResult4, totalResult5)

