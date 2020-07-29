'use strict';

const calculator = () => {
    const output = document.querySelector('.calculator__output'),
        coordination = document.querySelector('.buttonsСo-ordination'),
        number = document.querySelectorAll('.number'),
        buttonsNumber = document.querySelector('.buttonsNumber');
    coordination.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            return
        }
        switch (e.target.dataset.coordination) {
            case 'plus':
                output.append('+');
                break
            case 'minus':
                output.append('-');
                break
            case 'multiplication':
                output.append('*');
                break
            case 'division':
                output.append('/');
                break
            case 'equally':
                if (output.textContent === '') {
                    output.textContent = 'Вы ничего не ввели! Попробуйте ещё раз';
                    setTimeout(() => {
                        output.textContent = '';
                    }, 2000);
                } else {
                    let equation = eval(output.textContent);
                    output.innerHTML = equation;
                }
                break
            case 'clear':
                output.textContent = '';
            default:
                break
        }
    })

    buttonsNumber.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            return
        }
        output.append(e.target.textContent);
    })
}

calculator();