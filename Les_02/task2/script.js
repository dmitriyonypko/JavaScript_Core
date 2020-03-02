let fisrtPrice = +prompt("Enter the first price of sand");
let secondPrice = +prompt("Enter the second price of sand");
let thirdPrice = +prompt("Enter the third price of sand");

let firstSize = +prompt("Enter the capacity of the first bucket");
let secondSize = +prompt("Enter the capacity of the second bucket");
let thirdSize = +prompt("Enter the capacity of the third bucket");

function getAvgNum(a, b, c) {
    let result;
    if (a < b && a > c || a > b && a < c) {
        result = a;
    } else if (b < a && b > c || b > a && b < c) {
        result = b;
    } else {
        result = c;
    }
    return result;
}

let res1 = Math.max(fisrtPrice, secondPrice, thirdPrice) * Math.max(firstSize, secondSize, thirdSize);
let res2 = getAvgNum(fisrtPrice, secondPrice, thirdPrice) * getAvgNum(firstSize, secondSize, thirdSize);
let res3 = Math.min(fisrtPrice, secondPrice, thirdPrice) * Math.min(firstSize, secondSize, thirdSize);

result = res1 + res2 + res3;
alert(result);