const $btnMenu = document.querySelector('.nav__logo-menu__btn');
const $btnSwitch = document.getElementById('switch-mode');   
const $menu = document.querySelector('.nav__link');
const $body = document.body;

function toggleMenu() {
    $menu.classList.toggle('isOpen');
    $btnMenu.textContent = ($menu.classList.contains('isOpen')) ? 'close' : 'menu';
}

function toggleTheme() {
    document.body.toggleAttribute('data-dark-mode');
}

window.addEventListener('click', e => {
    if (e.target === $btnSwitch) toggleTheme();
    else if (e.target === $btnMenu) toggleMenu();  
});
