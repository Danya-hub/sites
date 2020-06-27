'use strict';

const sun = document.querySelector('.sun');

const activeSun = () => {
    const sunSmile = document.querySelector('.sun-smileImg');
    sunSmile.classList.toggle('smileImgActive');
};

sun.addEventListener('click', activeSun);