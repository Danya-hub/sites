export const mainInfo = () => {
    const netWork = document.querySelector('.mainInfo__netWork');
    const activeButtonNetWork = (e) => {
        const logoPencil = document.querySelector('.mainInfo__netWork-logoPencil'),
            logoFacebook = document.querySelector('.mainInfo__netWork-logoFacebook');
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