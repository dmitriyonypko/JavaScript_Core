// Вам необходимо самостоятельно решить,
// для какого задания какой оператор ветвления лучше использовать:
// if, switch или тернарный.

// 1. Запросить у пользователя его возраст и определить, кем он является:
//    ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

// let userAge = +prompt("Enter your age");

// let result;

// switch (true) {
//     case userAge >= 0 && userAge <= 2: {
//         result = "You are a child";
//         break;
//     }
//     case userAge > 2 && userAge <= 18: {
//         result = "You are a teenager";
//         break;
//     }
//     case userAge > 18 && userAge <= 60: {
//         result = "You are an adult";
//         break;
//     }
//     case userAge > 60: {
//         result = "You are a senior citizen";
//         break;
//     }
//     default: {
//         result = "Enter a positive number";
//     }
// }

// alert(result);

// 2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,
//    который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

// let num = +prompt("Enter the number from range (0 - 9)");

// let result;
// switch (num) {
//     case 0: {
//         result = ")";
//         break;
//     }
//     case 1: {
//         result = "!";
//         break;
//     }
//     case 2: {
//         result = "@";
//         break;
//     }
//     case 3: {
//         result = "#";
//         break;
//     }
//     case 4: {
//         result = "$";
//         break;
//     }
//     case 5: {
//         result = "%";
//         break;
//     }
//     case 6: {
//         result = "^";
//         break;
//     }
//     case 7: {
//         result = "&";
//         break;
//     }
//     case 8: {
//         result = "*";
//         break;
//     }
//     case 9: {
//         result = "(";
//         break;
//     }
//     default: {
//         result = "Enter the number from range (0 - 9)";
//     }
// }

// alert(result);

// 3. Запросить у пользователя трехзначное число и проверить,
//    есть ли в нем одинаковые цифры.

// let num = prompt("Enter three digit number");

// (num[0] == num[1] || num[0] == num[2] || num[1] == num[2]) ? alert("YES") : alert("NO");

// 4. Запросить у пользователя год и проверить, високосный он или нет.
//    Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

// let year = +prompt("Enter the year number");

// let result;

// if (year % 400 == 0) {
//     result = "It's a leap year";
// } else if (year % 4 == 0 && year % 100 != 0) {
//     result = "It's a leap year";
// } else {
//     result = "It isn't a leap year";
// }

// alert(result);

// 5. Запросить у пользователя пятиразрядное число и определить, является ли  оно палиндромом.

// let num = prompt("Enter five digit number");

// (num[0] == num[4] && num[1] == num[3]) ? alert("Palindrome") : alert("Not a palindrome");

// 6. Написать конвертор валют.
//    Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести:
//    EUR, UAN или AZN, и получает в ответ соответствующую сумму.

// let summInUSD = +prompt("Enter the amount in dollars");
// let choice = +prompt("Choose a currency to convert:\n1 - EUR\n2 - UAH\n3 - AZN");

// const EUR = 0.91;
// const UAH = 24.60;
// const AZN = 1.7;
// let result;

// switch (choice) {
//     case 1: {
//         result = String((EUR * summInUSD).toFixed(2)) + " €";
//         break;
//     }
//     case 2: {
//         result = String((UAH * summInUSD).toFixed(2)) + " ₴";
//         break;
//     }
//     case 3: {
//         result = String((AZN * summInUSD).toFixed(2)) + " ₼";
//         break;
//     }
// }

// alert(`You have: ${result}`);

// 7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
//    от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

// let purchaseAmount = +prompt("Enter purchase amount");
// let discountedAmount = purchaseAmount;

// if (purchaseAmount >= 200 && purchaseAmount < 300) {
//     discountedAmount = purchaseAmount - (purchaseAmount * 0.03);
// } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
//     discountedAmount = purchaseAmount - (purchaseAmount * 0.05);
// } else if (purchaseAmount >= 500) {
//     discountedAmount = purchaseAmount - (purchaseAmount * 0.07);
// }

// alert(`Amount to pay ${discountedAmount}`);

// 8. Запросить у пользователя длину окружности и периметр квадрата.
//    Определить, может ли такая окружность поместиться в указанный квадрат.

// let circleLength = +prompt("Enter lap length");
// let squarePerimeter = +prompt("Enter the perimeter of the square");

// let diameter = circleLength / Math.PI;
// let side_square = squarePerimeter / 4;

// let result = (diameter == side_square) ? "YES" : "NO";
// alert(result);

// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.
//    За  каждый правильный ответ начисляется 2 балла.
//    После вопросов выведите пользователю количество набранных баллов.

// let firstAnswer = +prompt("Which ocean is the largest?\n1 - Pacific Ocean\n2 - Indian Ocean\n3 - Atlantic Ocean");
// let secondAnswer = +prompt("Which continent has no rivers?\n1 - Australia\n2 - Africa\n3 - Antarctica");
// let thirdAnswer = +prompt("Which lake is the deepest?\n1 - Synevir\n2 - Viktoria\n3 - Baikal");
// let result = 0;

// if (firstAnswer == 1) {
//     result += 2;
// }

// if (secondAnswer == 3) {
//     result += 2;
// }

// if (thirdAnswer == 3) {
//     result += 2;
// }

// alert(`Your total: ${result}`);

// 10. Запросить дату (день, месяц, год) и вывести следующую за ней дату.
//     Учтите возможность перехода на следующий месяц, год, а также високосный год.

// let day = +prompt("Enter day: ");
// let month = +prompt("Enter month: ");
// let year = +prompt("Enter year: ");

// function leapYear(year) {
//     let result = false;
//     if (year % 400 == 0) {
//         result = true;
//     } else if (year % 4 == 0 && year % 100 != 0) {
//         result = true;
//     }
//     return result;
// }

// switch (true) {
//     case leapYear(year) && (day == 28 && month == 2): {
//         day = 29;
//         break;
//     }
//     case !leapYear(year) && (day == 28 && month == 2): {
//         day = 1;
//         month = 3;
//         break;
//     }
//     case day == 31 && month == 12: {
//         day = 1;
//         month = 1;
//         year += 1;
//         break;
//     }
//     case day == 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10): {
//         day = 1;
//         month += 1;
//         break;
//     }
//     case day == 30 && (month == 4 || month == 6 || month == 9 || month == 11): {
//         day = 1;
//         month += 1;
//         break;
//     }
//     case day >= 1 && day < 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12): {
//         day += 1;
//         break;
//     }
//     case day >= 1 && day < 30 && (month == 4 || month == 6 || month == 9 || month == 11): {
//         day += 1;
//         break;
//     }
//     case day >= 1 && day < 28 && month == 2: {
//         day += 1;
//         break;
//     }
//     default: {
//         alert("Error! Enter a valid date!");
//     }
// }

// if (day <= 9) {
//     day = '0' + day;
// }
// if (month <= 9) {
//     month = '0' + month;
// }

// alert(String(day) + "." + month + "." + year);
