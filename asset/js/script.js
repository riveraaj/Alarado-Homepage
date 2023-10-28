window.addEventListener('DOMContentLoaded', () => {
    toggleMenu();
    toggleTheme();
})

function toggleMenu() {
    const $btnMenu = document.querySelector('.nav__logo-menu__btn');

    document.addEventListener('click', e => {
        if (e.target === $btnMenu){
            let $menu = document.querySelector('.nav__link');
            $menu.classList.toggle('isOpen');
            ($menu.classList.contains('isOpen')) ? $btnMenu.innerHTML = 'close' : $btnMenu.innerHTML = 'menu'
        }
    });
}

function toggleTheme() {
    const $btnSwitch = document.getElementById('switch-mode');
        
    document.addEventListener('click', e => {
        if (e.target === $btnSwitch){
            document.body.toggleAttribute('data-dark-mode');
        }
    });
}