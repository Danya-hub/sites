'use strict';

const buttons = document.querySelector('.buttons');
const forbiddenness = document.querySelectorAll('.forbiddenness');
const operator = document.querySelectorAll('.operator');

buttons.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
        return
    };
    const text = document.querySelector('#input');
    let splitTxt = text.value.split('');
    text.value += e.target.innerHTML;

    for (let i = 0; i < forbiddenness.length; i++) {
        if (splitTxt[0] == forbiddenness[i].textContent.split('')) {
            alert(`${splitTxt[0]} не может быть первым символом`);
            return text.value = null;
        };
    };

    if (splitTxt.length > 50) {
        alert('Вы записали максимальное количество символов!');
        return text.value = null;
    };

    if (!((splitTxt.filter(e => e === '=' ? e : null).toString().length) < 2)) {
        alert('Можно использовать только 1 раз символ " = " ');
        return text.value = null;
    } else {
        let lastSymbol = splitTxt.indexOf('=');
        if (lastSymbol > -1) {
            splitTxt.splice(lastSymbol, 1);
            const result = eval(splitTxt.toString().replace(/[,]/g, ''));
            text.value = result;
            setTimeout(() => {
                text.value = null;
            }, 5000);
        }
    };

    for (let i = 0; i < operator.length; i++) {        
        if (splitTxt[splitTxt.length - 1] === operator[i].textContent && splitTxt[splitTxt.length - 2] === operator[i].textContent) {
            alert('Нельзя, два раза подряд, использовать один и тот же символ!');
            return text.value = null;
        }
    }

    if (e.target.dataset.elem === 'delete') {
        text.value = text.value.substring(0, text.value.length - 1);
    };
})