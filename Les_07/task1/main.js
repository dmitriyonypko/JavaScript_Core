function getRandomColor(min = 0, max = 255) {
    return Math.floor(Math.random() * (max - min) + min + 1);
}

function generateSquare() {
    const square = document.createElement('DIV');
    square.style.height = '60px';
    square.style.width = '60px';
    square.style.display = 'inline-block';
    return square;
}

function addAllSquares() {
    let count = 100;
    while (count > 0) {
        mainDiv.appendChild(generateSquare());
        count--;
    }
}

function arrWithShuffleIndex() {
    const arr = new Array(100);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = i;
    }

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

let arrWithIndex = arrWithShuffleIndex();

let arrayWithAllDivs = document.getElementById('parentDiv').children;

let counter = 0;
let timerId = setInterval(function () {
    setElemColor();
    counter++;
    if (counter == 100) {
        document.querySelector('.forFinish').innerHTML = '<h2>Заполнение завершено</h2>';
        clearInterval(timerId);
    }
}, 30);
