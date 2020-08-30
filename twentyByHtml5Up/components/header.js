'use strict';

const header = () => {
    const buttonOpenPanel = document.querySelector('.buttonWrapper');
    const navPanel = document.querySelector('.navPanel');
    buttonOpenPanel.addEventListener('click', () => {
        const pageWrapper = document.querySelector('.page-wrapper');
        pageWrapper.classList.toggle('pageWrapperBias');
        if (pageWrapper.classList.contains('pageWrapperBias')) {
            navPanel.classList.add('navPanelActive');
            buttonOpenPanel.classList.add('pageWrapperBias');
        } else {
            navPanel.classList.remove('navPanelActive');
            buttonOpenPanel.classList.remove('pageWrapperBias');
        }
    })    
};

export default header;