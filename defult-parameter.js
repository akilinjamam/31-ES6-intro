
// if you forget or dont give any parameter in the callout of function , use = sign and give a value. if you apply this, it means if you forget to give the parameter , it will set defult parameter which is given after equal sign.

function add(num1, num2 = 1) {
    const total = num1 + num2;
    return total
}


const totalResult = add(13);
console.log(totalResult)