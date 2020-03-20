function getRandomNumber(min = 10, max = 100) {
    return Math.floor(Math.random() * (max - min) + min + 1);
}

function getOperator() {
    const operators = ['+', '-', '/', '*'];
    return operators[getRandomNumber(0, 3)];
}

function getExpression() {
    const operator = getOperator();
    if (operator === '*') {
        return `${getRandomNumber(2, 30)} ${operator} ${getRandomNumber(2, 30)}`;
    }
    return `${getRandomNumber()} ${operator} ${getRandomNumber()}`;
}

function showResult(expr) {
    const userResult = document.querySelector('.inputNum').value;
    const ourResult = eval(expr);
    const msg = document.querySelector('.result');
    msg.style.visibility = "visible";
    if (userResult == ourResult) {
        msg.innerText = 'Все верно';
        setTimeout(() => msg.style.visibility = "hidden", 1000);
        main(getExpression());
    } else {
        msg.innerText = 'Подумай еще';
        setTimeout(() => msg.style.visibility = "hidden", 1000);
        main(expr);
    }
}


function main(expression) {

    mainDiv.innerText = expression;
    document.querySelector('.btn').addEventListener('click', () => showResult(expression));
}

let mainDiv = document.querySelector('.main-div');
main(getExpression())
