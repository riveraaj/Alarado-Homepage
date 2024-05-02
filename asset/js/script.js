function toggleMenu() {
    const $btnMenu = document.querySelector('.nav__logo-menu__btn');
    let $menu = document.querySelector('.nav__link');
    $menu.classList.toggle('isOpen');
    ($menu.classList.contains('isOpen')) ? $btnMenu.textContent = 'close' : $btnMenu.textContent = 'menu'
}

function toggleTheme() {
    const $btnSwitch = document.getElementById('switch-mode');   
    document.body.toggleAttribute('data-dark-mode');
}

window.addEventListener('click', e => {
    if(e.target.matches('switch-mode')) toggleTheme();
    if(e.target.matches('.nav__logo-menu__btn')) toggleMenu();  
});
