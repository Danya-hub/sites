export const modalLogin = () => {
    return `
        <button class="header__modalIcon-closeButton">&#10006;</button>
        <h2 class="header__modalIcon-title">Login</h2>
        <form class="header__modalIcon-form">
            <input type="text" name="nickname" id="header__modalIcon-nickname" placeholder="Имя" required>
            <input type="email" name="email" id="header__modalIcon-email" placeholder="Почта" required>
            <input type="password" name="password" id="header__modalIcon-password" placeholder="Пароль" required>
        </form>
        <button class="header--buttonReg">Забыли пароль?</button>
        <button type="submit" class="header--buttonSubmite">Отправить</button>
    `
}

export const modalReg = () => {
    return `
        <button class="header__modalIcon-closeButton">&#10006;</button>
        <h2 class="header__modalIcon-title">Register</h2>
        <form class="header__modalIcon-form">
            <input type="text" name="nickname" id="header__modalIcon-nickname" placeholder="Имя" required>
            <input type="email" name="email" id="header__modalIcon-email" placeholder="Почта" required>
            <input type="password" name="password" id="header__modalIcon-password" placeholder="Пароль" required>
        </form>
        <label class="header__modalIcon-label">
            <input type="checkbox" name="checkbox" id="header--label-checkbox">
            <span class="header---checkbox-txt">Запомнить данные</span>
        </label>
        <button type="submit" class="header--buttonSubmite">Отправить</button>
        `
}