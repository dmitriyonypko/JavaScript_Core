function getRandomColor(min = 0, max = 255) {
    return Math.floor(Math.random() * (max - min) + min + 1);
}

function generateSquare(id) {
    const square = document.createElement('DIV');
    square.id = `${id}`;
    square.style.height = '60px';
    square.style.width = '60px';
    square.style.display = 'inline-block';
    return square;
}

function addAllSquares() {
    let count = 0;
    while (count < 100) {
        mainDiv.appendChild(generateSquare(count));
        count++;
    }
}

function createArr() {
    const arr = new Array(100);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i;
    }
    return arr;
}

function sortArray(arr) {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

function setElemColor() {
    arrayWithAllDivs[arrWithIndex.pop()].style.backgroundColor = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
}

const mainDiv = document.querySelector('.main-div');

addAllSquares();

let arrWithIndex = sortArray(createArr());

let arrayWithAllDivs = document.getElementById('parentDiv').children;

let countClick = 0;
mainDiv.addEventListener('click', function (event) {
    let target = event.target;
    arrWithIndex.unshift(target.id);
    arrWithIndex = sortArray(arrWithIndex);
    target.style.backgroundColor = 'white';
    document.querySelector('.count-click').innerText = `Количество кликов: ${++countClick}`;
});

let timerId = setInterval(function () {
    setElemColor();
    if (arrWithIndex.length === 0) {
        document.querySelector('.forFinish').innerHTML = '<h2>Заполнение завершено</h2>';
        clearInterval(timerId);
    }
}, 500);
