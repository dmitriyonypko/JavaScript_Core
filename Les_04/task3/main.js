// Task 3:

// Напишите свои функции-аналоги методов массивов:
// pop, 
// push, 
// shift, 
// unshift, 
// concat
//  используя только свойства массивов

// function anotherPop(arr) {
//     arr.reverse();
//     let result = arr.shift();
//     arr.reverse();
//     return result;
// }
// alert(`pop(): ${anotherPop(someArr)}`);

// function anotherShift(arr) {
//     arr.reverse();
//     let result = arr.pop();
//     arr.reverse();
//     return result;
// }
// alert(`shift(): ${anotherShift(someArr)}`);

// function anotherPush(arr, ...args) {
//     arr.reverse();
//     arr.unshift(...args.reverse());
//     arr.reverse();
//     return arr;
// }
// anotherPush(someArr, 7, 8, [1, 2, 3]);
// alert(`push: ${someArr}`);

// function anotherUnshift(arr, ...args) {
//     arr.reverse();
//     arr.push(...args.reverse());
//     arr.reverse();
//     return arr;
// }
// anotherUnshift(someArr, 7, 8, 9);
// alert(`unshift: ${someArr}`);


// CONCAT
// let someArr = [1, 2, 3, 4, 5];
// let ob = {
//     name: 'John',
//     age: 25
// };

// // let arr3 = someArr.concat(6, 7, [1, 2, 3], 'hello', ob);


// function anotherConcat(arr, ...args) {
//     let result = arr;
//     args.map((elem) => (Array.isArray(elem)) ?
//         args.splice(args.indexOf(elem), 1, ...elem) : elem);
//     result.push(...args);
//     return result;
// }

// let arr3 = anotherConcat(someArr, 6, 7, [1, 2, 3], 'hello', ob);

// alert(arr3);
// alert(arr3.length);

// for (let i of arr3) {
//     alert(i);
// }
