'use strict';

const header = () => {
    const burgerMenu = document.querySelector('.header__burgerMenu');
    const headerInfo = document.querySelector('.headerInfo');
    const header = document.querySelector('header');

    console.dir(headerInfo);
    console.dir(header);
    

    const burgerMenuActive = () => {
        const headerList = document.querySelector('.header__list');
        headerList.classList.toggle('burgerMenuHeight');
    }

    burgerMenu.addEventListener('click', burgerMenuActive);
}

export default header;