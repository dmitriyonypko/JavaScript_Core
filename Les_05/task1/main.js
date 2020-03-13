// Task 1:
// Во всех заданиях обязательно использовать рекурсию.

//1. Написать функцию возведения числа в степень.
// function pow(number, power) {
//     if (power == 1) return number;
//     return number * pow(number, power - 1);
// }

// alert(pow(2, 16));

//2. Написать функцию поиска наибольшего общего делителя.

// function gcd(num1, num2) {
//     let maxNum = Math.max(num1, num2);
//     let minNum = Math.min(num1, num2);
//     if (maxNum % minNum == 0) return minNum;
//     return gcd(minNum, maxNum % minNum);
// }

// alert(gcd(612, 680));

//3. Написать функцию для поиска максимальной цифры в числе.

// function maxDig(num) {
//     let m, n;
//     if (num < 10) return num;
//     n = num % 10;
//     m = maxDig(Math.floor(num / 10));
//     return (n > m) ? n : m;
// }

// alert(maxDig(478149));

//4. Написать функцию, которая определяет простое ли переданное число.

// function isPrime(num, i = 2) {
//     if (i == num) return true;
//     if (!(num % i)) return false;
//     return isPrime(num, ++i);
// }

// alert(isPrime(113));

//5. Написать функцию для вывода всех множителей переданного числа в возрастающем порядке.
// Например: число 18 – множители 2 * 3 * 3.

// function factors(num, i = 2, result = [], index = 0) {

//     if (i == num) {
//         result[index] = i;
//         return result;
//     }

//     if (!(num % i)) {
//         result[index] = i;
//         return factors(num /= i, 2, result, ++index);
//     } else {
//         return factors(num, ++i, result, index);
//     }
// }

// alert(div(680));

// 6. Написать функцию, которая возвращает число Фибоначчи
// по переданному порядковому номеру.
// Числа Фибоначчи: 1, 1, 2, 3, 5, 8, 13… Ряд основывается на
// том, что каждое число равно сумме двух предыдущих чисел.
// Например: порядковый номер 3 – число 2, порядковый
// номер 6 – число 8

// function fib(num) {
//     if (num <= 1) return num;
//     return fib(num - 2) + fib(num - 1);
// }

// alert(fib(6)); // 8
