'use strict';

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const labelsList = document.querySelector('.labels-list');
const span = document.querySelector('.labels-list>span')

const addTxt = () => {
    span.remove();

    labelsList.innerHTML += `
            <li>
                <label>
                    <input type="checkbox" name="checkbox" id="checkbox">
                    <span>${input.value}</span>
                </label>
            </li>
        `

    return input.value = '';
}


button.addEventListener('click', () => {
    addTxt();
});

window.addEventListener('keydown', (e) => {
    if (e.defaultPrevented) {
        return;
    };

    const handled = false;
    if (handled) {
        e.preventDefault();
    };

    if (e.key === 'Enter') {
        addTxt();
    };
});