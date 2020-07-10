export const mainInfo = () => {
    const netWork = document.querySelector('.mainInfo__netWork'),
        logoPencil = document.querySelector('.mainInfo__netWork-logoPencil'),
        logoFacebook = document.querySelector('.mainInfo__netWork-logoFacebook'),
        body = document.querySelector('body');
    if (body.offsetWidth <= 420) {
        logoPencil.textContent = '';
        logoFacebook.textContent = '';
    }
    const activeButtonNetWork = (e) => {
        if (e.target === e.currentTarget) {
            return
        }
        if (logoPencil.classList.contains('netWorkActiveButton')) {
            logoPencil.classList.remove('netWorkActiveButton');
            logoFacebook.classList.add('netWorkActiveButton');
            
        } else if (logoFacebook.classList.contains('netWorkActiveButton')) {
            logoFacebook.classList.remove('netWorkActiveButton');
            logoPencil.classList.add('netWorkActiveButton');
        }

    }

    netWork.addEventListener('click', activeButtonNetWork)
}