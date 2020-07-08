'use strict';

import {
    modalLogin,
    modalReg
} from "../modal/modalSafety.js";

export const header = () => {
    const body = document.querySelector('body'),
        checkIn = document.querySelector('.header__checkIn'),
        modalIcon = document.querySelector('.header__modalIcon');
    // if (body.offsetWidth < 420) {
    //     const mobileVerSafety = 
    // }
    if (body.offsetWidth >= 1024) {
        checkIn.innerHTML = `
            <span class="header__txtQuestion" data-safety="reg">Have an Account ?</span>
            <button class="header__buttonLogin" data-safety="log">Login</button>
        `
        const safety = (e) => {
            if (e.target === e.currentTarget) {
                return
            }
            console.log(e.target.dataset.safety);
            const closeButton = document.querySelector('.header__modalIcon-closeButton'),
                modal = document.querySelector('.modal');
            modal.classList.remove('modalAction');
            modalIcon.style.opacity = 1;
            modalIcon.style.visibility = 'unset';
            modalIcon.style.transform = 'translate(0%, 0%)';
            console.log(closeButton);
            switch (e.target.dataset.safety) {
                case 'reg':
                    modalIcon.innerHTML = modalReg();
                    closeButton.addEventListener('click', () => {
                        modal.classList.add('modalAction');
                        modalIcon.style.bottom = '130%';
                        modalIcon.style.opacity = 0;
                    })
                    break;
                case 'log':
                    modalIcon.innerHTML = modalLogin();
                    // closeButton.addEventListener('click', () => {
                    //     modal.classList.add('modalAction');
                    //     modalIcon.style.bottom = '130%';
                    //     modalIcon.style.opacity = 0;
                    // })
                    break;

                default:
                    break;
            }
        }

        checkIn.addEventListener('click', safety);
    }
}