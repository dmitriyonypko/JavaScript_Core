// Map
// function anotherMap(arr) {
//     return arr.reduce(function (el, current, index) {
//         el[index] = current[0];
//         return el;
//     }, []);
//     // return arr.reduce((el, current) => el + current[0], '').split('');
// }

// let someArr = ['Яблоко', 'Банан', 'Ананас', 'he', [1, 2]]//.map(el => el[0]);
// alert(anotherMap(someArr));


// filter
// function anotherFilter(arr) {
//     return arr.reduce(function (el, current) {
//         if (current[0].toLowerCase() === 'а') {
//             el[el.length] = current;
//         }
//         return el;
//     }, []);
// }

// let someArr2 = ['Яблоко', 'Банан', 'Ананас', 'Апельсин']//.filter(el => el[0].toLowerCase() == 'а');
// alert(anotherFilter(someArr2));


// forEach
// function anotherForEach(arr) {
//     return arr.reduce(function (el, current, index) {
//         el[index] = `${index + 1}: ${current};`;
//         return el;
//     }, []);
// }

// let someArr3 = ['Яблоко', 'Банан', 'Ананас'];
// // someArr3.forEach((el, i, arr) => arr[i] = `${i + 1}: ${el};`);

// alert(anotherForEach(someArr3));
