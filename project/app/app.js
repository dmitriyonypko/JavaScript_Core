class Game {
    constructor() {
        this.instructions = {
            el: '.info',
            data: {
                score: 0,
                life: 10
            }
        };
        this.vueObj = new Vue(this.instructions);
        this.mainDiv = document.querySelector('.circle');
        this.inpt = document.querySelector('#input-answer');
        this.button = document.querySelector('.check-answer');
        this.circleHeight = '100';
        this.minWindowHeight = '115';
        this.maxWindowHeight = document.documentElement.clientHeight - this.minWindowHeight - this.circleHeight - 5;

        this.button.addEventListener('click', this.checkAnswer);
        this.inpt.addEventListener('keyup', (key) => {
            if (key.keyCode === 13) {
                this.checkAnswer();
            }
        });
    }

    generateRandomNumber(min = 0, max = 10) {
        return Math.floor(Math.random() * (max - min) + min + 1);
    }

    generateOperator() {
        const operators = ['+', '-', '*', '/'];
        return operators[this.generateRandomNumber(0, 3)];
    }

    generateExpression() {
        return `${this.generateRandomNumber()} ${this.generateOperator()} ${this.generateRandomNumber()}`;
    }

    generateCircle() {
        const circle = document.createElement('DIV');
        circle.style.height = '100px';
        circle.style.width = '100px';
        circle.style.borderRadius = '50%';
        circle.style.backgroundColor = `rgba(${this.generateRandomNumber(0, 255)},${this.generateRandomNumber(0, 255)},${this.generateRandomNumber(0, 255)}, 0.7)`;
        circle.style.border = '1px solid black';
        circle.innerText = `${this.generateExpression()}`;
        circle.style.fontSize = '25px';
        circle.style.display = 'flex';
        circle.style.alignItems = 'center';
        circle.style.justifyContent = 'center';
        circle.style.position = 'absolute';
        circle.style.left = '0px';
        circle.style.top = `${this.generateRandomNumber(this.minWindowHeight, this.maxWindowHeight)}px`;
        return circle;
    }

    checkAnswer = () => {
        let userInput = this.inpt.value;
        this.inpt.value = '';
        for (let circle of this.mainDiv.children) {

            if (+userInput === +eval(circle.innerText).toFixed(2)) {
                this.mainDiv.removeChild(circle);
                this.vueObj.score += 1;
            }

        }
    }

}

let game = new Game();

game.mainDiv.appendChild(game.generateCircle());
let timer1 = setInterval(function () {

    if (!game.vueObj.life) {
        clearInterval(timer1);
        return;
    }

    game.mainDiv.appendChild(game.generateCircle());
}, 4000);

let timer2 = setInterval(function () {

    if (!game.vueObj.life) {
        clearInterval(timer2);
        game.mainDiv.innerHTML = '<h1>GAME OVER :( </h1>';
        game.mainDiv.className = 'gameOver';
        return;
    }

    for (let circle of game.mainDiv.children) {

        let currentWidth = parseInt(circle.style.left, 10) + parseInt(circle.style.width, 10) + 5;

        if (currentWidth >= document.documentElement.clientWidth) {
            game.mainDiv.removeChild(circle);
            game.vueObj.life -= 1;
            continue;
        }

        circle.style.left = (parseInt(circle.style.left, 10) + 1) + 'px';
    }

}, 25)
