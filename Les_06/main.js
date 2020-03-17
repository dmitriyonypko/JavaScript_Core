// 1. Написать функцию, которая принимает строку и выводит
// статистику о ней: количество букв, количество цифр и
// количество других знаков.

// function getInfo(str) {
//     let regexpForletters = /[a-z]+/gi;
//     let regexpForNumbers = /\d+/gi;
//     let regexpSymbols = /[^\da-z]/gi;

//     let countLetters = (str.match(regexpForletters) || []).join("").length;
//     let countNumbers = (str.match(regexpForNumbers) || []).join("").length;
//     let countSymbols = (str.match(regexpSymbols) || []).join("").length;

//     let result = `Count of letters: ${countLetters}\nCount of numbers: ${countNumbers}\nCount of symbols: ${countSymbols}`;
//     return result;
// }

// let str = '<h1>Hello, world!</h1>';
// alert(getInfo(str));

// 3. Написать функцию, которая заменяет в полученной строке
// большие буквы на маленькие, маленькие – на большие, а
// цифры – на знак нижнего подчеркивания.

// function replacer(str) {
//     let result = '';
//     for (let letter of str) {
//         if (isFinite(letter)) {
//             result += letter.replace(/\d/g, '_');
//         } else if (letter === letter.toUpperCase()) {
//             result += letter.replace(/\p{Lu}/gu, (letter) => letter.toLowerCase());
//         } else if (letter === letter.toLowerCase()) {
//             result += letter.replace(/\p{Ll}/gu, (letter) => letter.toUpperCase());
//         }
//     }
//     return result;
// }

// let str = 'Ab1Ab2Ab3';

// alert(replacer(str));

// 4. Написать функцию, которая преобразует названия cssстилей с дефисом в название в СamelСase стиле: font-size
// в fontSize, background-color в backgroundColor, textalign в textAlign.

// function replacerCss(str) {
//     let regexp = /-(?<=-)[a-z]/gi
//     let result = str.replace(regexp, (item) => item.toUpperCase()[1]);
//     return result;
// }

// let str = 'font-size';

// alert(replacerCss(str));

// 5. Написать функцию, которая принимает словосочетание
// и превращает его в аббревиатуру.
// Например: cascading style sheets в CSS, объектноориентированное программирование в ООП. 

// function getAbbreviation(str) {
//     let pattern = /^\p{L}|(?<=\s)\p{L}/gui;
//     let abbreviation = str.match(pattern) || [];
//     return abbreviation.join('').toUpperCase();
// }

// alert(getAbbreviation('cascading style sheets'));

// 6. Написать функцию, которая принимает любое количество строк, объединяет их в одну длинную строку и
// возвращает ее.

// function getConcatString(...arr) {
//     return arr.join('');
// }

// alert(getConcatString('aa', 'sdfg', 'hello', 'js'));

// 7. Написать функцию – калькулятор. Функция принимает
// строку с примером, определяет, какое действие необходимо
// выполнить (+ - * /), переводит операнды в числа, решает
// пример и возвращает результат.

// function calc(str) {
//     let regexp = /(-?\d+(?:\.\d+)?)\s?([-+*\/])\s?(-?\d+(?:\.\d+)?)/;
//     let result = str.match(regexp);
//     let [num1, operator, num2] = [result[1], result[2], result[3]];
//     return eval(`${num1}${operator}${num2}`);
// }

// let str = '1.2 * -4';

// alert(calc(str));

// 8. Написать функцию, которая получает url и выводит подробную информацию о нем.
// Например: url “https://itstep.org/ua/about”, информация
// “протокол: https, домен: itstep.org, путь: /ua/about”.

// function showUrlInfo(url) {
//     let regexpForProtocol = /^[a-z]+(?=:)/gi;
//     let regexpForDomain = /([\w-]+\.)+\w+/gi;
//     let regexpForPath = /(?<=\w)\/\w+/gi;

//     let protocol = url.match(regexpForProtocol) || '';
//     let domain = url.match(regexpForDomain) || '';
//     let path = (url.match(regexpForPath) || []).join('');

//     let result = `Протокол: ${protocol}, домен: ${domain}, путь: ${path}`;
//     return result;
// }

// let url = 'https://it-step.org/ua/about';

// alert(showUrlInfo(url));

// 9. Написать функцию, которая принимает строку и разделитель и возвращает массив подстрок,
// разбитых с помощью указанного разделителя.
// Например: строка “10/08/2020”, разделитель “/”, результат:
// “10”, “08”, “2020”.
// Выполняя задание, не используйте функцию split().

// function separator(str, sep) {
//     let regexp = new RegExp(`\\w+[^${sep}]`, 'g');
//     return str.match(regexp) || '';
// }

// alert(separator('10/08/2020', '/'));

// 10. Написать функцию вывода текста по заданному шаблону.
// Функция принимает первым параметром шаблон, в тексте
// которого может использоваться %, после символа % указывается индекс входного параметра. При выводе вместо
// %индекс необходимо вывести значение соответствующего
// входного параметра.
// Например: print(“Today is %1 %2.%3.%4”, “Monday”, 10,
// 8, 2020) должна вывести “Today is Monday 10.8.2020”

// function format(pattern, ...arr) {
//     let regexp = /%\w/g;
//     let index = 0;
//     return pattern.replace(regexp, () => arr[index++]);
// }

// let str = 'Today is %1 %2.%3.%4';

// alert(format(str, 'Monday', 10, 8, 2020));
