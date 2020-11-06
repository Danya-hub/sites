'use strict';

const field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');

const body = document.querySelector('body');
body.style.background = 'springgreen';

for (let i = 0; i < 400; i++) {
    const excel = document.createElement('div');
    field.appendChild(excel);
    excel.classList.add('excel')
}

let excel = document.getElementsByClassName('excel');
let x = 1,
    y = 20;

for (let i = 0; i < excel.length; i++) {
    if (x > 20) {
        x = 1;
        y--;
    }

    excel[i].setAttribute('posX', x);
    excel[i].setAttribute('posY', y);
    x++;
}

const generateSnake = () => {
    let posX = Math.round(Math.random() * (20 - 3) + 3);
    let posY = Math.round(Math.random() * (20 - 1) + 1);
    return [posX, posY];
}

let coordinates = generateSnake();

let snakeBody = [document.querySelector('[posX= "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'),
    document.querySelector('[posX= "' + (coordinates[0] - 1) + '"][posY = "' + coordinates[1] + '"]'),
    document.querySelector('[posX= "' + (coordinates[0] - 2) + '"][posY = "' + coordinates[1] + '"]')
];

for (let i = 0; i < snakeBody.length; i++) {
    snakeBody[i].classList.add('snakeBody')
}

snakeBody[0].classList.add('head')

//apple

let apple;

const creatApple = () => {
    const generateApple = () => {
        let posX = Math.round(Math.random() * (20 - 3) + 3);
        let posY = Math.round(Math.random() * (20 - 1) + 1);
        return [posX, posY];
    }

    let appleCoordinates = generateApple();
    apple = document.querySelector('[posX= "' + appleCoordinates[0] + '"][posY = "' + appleCoordinates[1] + '"]');

    while (apple.classList.contains('snakeBody')) {
        let appleCoordinates = generateApple();
        apple = document.querySelector('[posX= "' + appleCoordinates[0] + '"][posY = "' + appleCoordinates[1] + '"]');
    }

    apple.classList.add('apple');
}

creatApple()

let direction = 'right';
let steps = false;
let div = document.createElement('div');
document.body.appendChild(div);
div.style.cssText = `
            display: block;
            background: #ffff;
            font-size: 16px;
            width: 300px;
            line-height: 30px;
            margin: 30px auto;
        `;

let score = 0;
div.textContent = `Ваши очки ${score}`;

const move = () => {
    let snakeCoordianates = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posY')];
    snakeBody[0].classList.remove('head');
    snakeBody[snakeBody.length - 1].classList.remove('snakeBody');
    snakeBody.pop();

    if (direction === 'right') {
        if (snakeCoordianates[0] < 20) {
            snakeBody.unshift(document.querySelector('[posX= "' + (+snakeCoordianates[0] + 1) + '"][posY = "' + snakeCoordianates[1] + '"]'));
            snakeBody[0].classList.add('head');
        } else {
            snakeBody.unshift(document.querySelector('[posX = "1"][posY = "' + snakeCoordianates[1] + '"]'));
            snakeBody[0].classList.add('head');
        }
    } else if (direction === 'left') {
        if (snakeCoordianates[0] > 1) {
            snakeBody.unshift(document.querySelector('[posX= "' + (+snakeCoordianates[0] - 1) + '"][posY = "' + snakeCoordianates[1] + '"]'));
            snakeBody[0].classList.add('head');
        } else {
            snakeBody.unshift(document.querySelector('[posX = "20"][posY = "' + snakeCoordianates[1] + '"]'));
            snakeBody[0].classList.add('head');
        }
    } else if (direction === 'up') {
        if (snakeCoordianates[1] < 20) {
            snakeBody.unshift(document.querySelector('[posX= "' + snakeCoordianates[0] + '"][posY = "' + (+snakeCoordianates[1] + 1) + '"]'));
            snakeBody[0].classList.add('head');
        } else {
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordianates[0] + '"][posY = "1"]'));
            snakeBody[0].classList.add('head');
        }
    } else if (direction === 'down') {
        if (snakeCoordianates[1] > 1) {
            snakeBody.unshift(document.querySelector('[posX= "' + snakeCoordianates[0] + '"][posY = "' + (snakeCoordianates[1] - 1) + '"]'));
            snakeBody[0].classList.add('head');
        } else {
            snakeBody.unshift(document.querySelector('[posX = "' + snakeCoordianates[0] + '"][posY = "20"]'));
            snakeBody[0].classList.add('head');
        }
    }

    if (snakeBody[0].getAttribute('posX') === apple.getAttribute('posX') && snakeBody[0].getAttribute('posY') === apple.getAttribute('posY')) {
        apple.classList.remove('apple');
        let a = snakeBody[snakeBody.length - 1].getAttribute('posX');
        let b = snakeBody[snakeBody.length - 1].getAttribute('posY');
        snakeBody.push(document.querySelector('[posX = "' + a + '"][posY = "' + b + '"]'));
        creatApple();
        score += 100;
        div.textContent = `Ваши очки: ${score}`;
    }

    if (snakeBody[0].classList.contains('snakeBody')) {
        alert('Game Over')
        clearInterval(interval);
        for (let i = 0; i < snakeBody.length; i++) {
            setTimeout(() => {
                snakeBody[i].removeAttribute('class')
                apple.removeAttribute('class')
            }, 1000);
            snakeBody[i].classList.add('fail');
        }
    }

    snakeBody[0].classList.add('head');
    for (let i = 0; i < snakeBody.length; i++) {
        snakeBody[i].classList.add('snakeBody');
    }

    steps = true;
}

let interval = setInterval(move, 300);

window.addEventListener('keydown', (e) => {
    if (steps === true) {
        if (e.keyCode === 37 && direction !== 'right') {
            direction = 'left';
            steps = false;
        } else if (e.keyCode === 38 && direction !== 'down') {
            direction = 'up';
            steps = false;
        } else if (e.keyCode === 39 && direction !== 'left') {
            direction = 'right';
            steps = false;
        } else if (e.keyCode === 40 && direction !== 'up') {
            direction = 'down';
            steps = false;
        }
    }
})