// 1. Запросите у пользователя его имя и выведите в ответ:
// «Привет, его имя!».

// let UserName = prompt("Введите своё имя");
// alert(`Привет, ${UserName}!`);

// 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат.
//    Текущий год укажите в коде как константу.

// const currentYear = 2020;
// let yearOfBirth = prompt("Введите год рождения");
// let age = currentYear - yearOfBirth;
// alert(age);

// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

// let sideLength = prompt("Введите длину стороны квадрата");
// let perimetr = sideLength * 4;
// alert(perimetr);

// 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.

// const PI = 3.14159;
// let radius = prompt("Введите радиус окружности");
// let square = radius ** 2 * PI;
// alert(square);

// 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться.
//  Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

// let distance = prompt("Введите расстояние(км)");
// let timeInHours = prompt("За сколько часов хотите добраться?");
// let speed = distance / timeInHours;
// alert(speed);

// 6. Реализуйте конвертор валют.
//  Пользователь вводит доллары, программа переводит в евро.
//   Курс валюты храните в константе.

// let EUR = 0.92;
// let summInUSD = prompt("Введите сумму(USD)");
// let convertToEUR = summInUSD * EUR;
// alert(`${convertToEUR}€`);

// 7. Пользователь указывает объем флешки в Гб.
//  Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку

// const fileSize_Mb = 820;
// let flashDriverSize_gb = prompt("Укажите объем флешки в гб");
// let flashDriverSize_mb = flashDriverSize_gb * 1000;
// let countFilesOnFlashDriver = (flashDriverSize_mb - flashDriverSize_mb % fileSize_Mb) / fileSize_Mb;
// alert(`Кол-во файлов: ${countFilesOnFlashDriver}`);


// 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки.
//  Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

// let userMoney = prompt("Введите сумму");
// let cocolateBarPrice = prompt("Введите цену шоколадки");
// let change = userMoney % cocolateBarPrice;
// let countCocolateBar = (userMoney - change) / cocolateBarPrice;

// alert(`Вы можете купить ${countCocolateBar} шоколадок`);
// alert(`Ваша сдача: ${change}`);

// 9. Запросите у пользователя трехзначное число и выведите его задом наперед.
//  Для решения задачи вам понадобится оператор % (остаток от деления).

// let userNumber = prompt("Введите трехзначное число");

// let digit1 = userNumber % 10;
// userNumber = (userNumber - digit1) / 10;
// let digit2 = userNumber % 10;
// let digit3 = (userNumber - digit2) / 10;

// alert(String(digit1) + digit2 + digit3);
