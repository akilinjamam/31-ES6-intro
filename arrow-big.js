// use bracket for declearing two or more parameter
const add = (num1, num2) => num1 + num2;

const totalAdd = add(12, 22);

console.log(totalAdd);


// multiply arrrow

const multiply = (num1, num2, num3) => num1 * num2 * num3;

const totalMultiply = multiply(12, 22, 3);

console.log(totalMultiply);

// multiply and divide 

const multiDivide = (num1, num2, num3) => (num1 * num2) / num3

const resultMultiDivide = multiDivide(5, 12, 6);

console.log(resultMultiDivide);

// keep a constant number in arrow function

const constNumber = (num1, num2) => num1 + num2 / 10;

const totalConstNumber = constNumber(12, 22);
console.log(totalConstNumber);

// if you want you can not use any bracket for declearing only one parameter.


const oneParameter = num => num;

const resultOneParameter = oneParameter(512);

console.log(resultOneParameter);

// decleare without parameter

const withOutParameter = () => 'this is akil injamam';

const resultwithOutParameter = withOutParameter();

console.log(resultwithOutParameter);


// for multiline function use second bracket.
//what is multiline function?
// the function which has a lots of work as well as maths.which can not be finished in one line.which takes a lots of lines.

const multilineFunction = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const multiply = sum * diff;

    return multiply;
}

const multilineFunctionResult = multilineFunction(10, 8);
console.log(multilineFunctionResult);