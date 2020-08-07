'use strict';

const header = () => {
    const buttonOpenPanel = document.querySelector('.header-buttonWrapper-buttonOpenPanel');
    const navPanel = document.querySelector('.navPanel');
    buttonOpenPanel.addEventListener('click', () => {
        const pageWrapper = document.querySelector('.page-wrapper');
        pageWrapper.classList.toggle('pageWrapperBias');
        if (pageWrapper.classList.contains('pageWrapperBias')) {
            navPanel.classList.add('navPanelActive');
        } else {
            navPanel.classList.remove('navPanelActive');
        }
    })
}

export default header;