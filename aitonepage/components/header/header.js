'use strict';

const header = () => {
    const burgerMenu = document.querySelector('.header__burgerMenu'); //div
    const navigationButtons = document.querySelector('.haederInfo__slider-navigation'); //buton
    const haederButton = document.querySelector('.haederInfo--navigation-button');

    const burgerMenuActive = () => {
        const headerListBlock = document.querySelector('.header__listBlock'); //div
        const headerList = document.querySelector('.header__list'); //ul
        if (headerListBlock.classList.contains('burgerNot-active')) {
            headerListBlock.classList.remove('burgerNot-active');
            headerListBlock.classList.add('burgerActive');
            headerList.style.display = 'block';
        } else if (headerListBlock.classList.contains('burgerActive')) {
            headerListBlock.classList.remove('burgerActive');
            headerListBlock.classList.add('burgerNot-active');
            headerList.style.display = 'none';
        }
    }

    const slider = (e) => {
        const headerFirstImg = document.querySelector('.headerFirstImg');
        const slideInfo = document.querySelector('.headerInfo--slide-info');
        // const headerSecondImg = document.querySelector('.headerSecondImg');
        if (e.target.id === 'firstRadioButton') {
            headerFirstImg.classList.remove('widthHeaderFirstImg');
            headerFirstImg.classList.add('widthHeaderSecondImg');
            headerFirstImg.classList.remove('headerSecondImg');
            
        } else if (e.target.id === 'secondRadioButton') {
            headerFirstImg.classList.remove('widthHeaderSecondImg');
            headerFirstImg.classList.add('widthHeaderFirstImg');
            headerFirstImg.classList.add('headerSecondImg');
        }
    }

    burgerMenu.addEventListener('click', burgerMenuActive);
    navigationButtons.addEventListener('click', slider);
}

export default header;