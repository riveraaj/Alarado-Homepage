window.addEventListener('DOMContentLoaded', () => {
    openMobileMenu();
})

let closeMenuTimeout;

function openMobileMenu() {
    const $btnMenu = document.querySelector('.nav__logo-menu__btn'),
        $menu = document.querySelector('.nav__link');

    document.addEventListener('click', e => {
        if (e.target === $btnMenu) {
            ($btnMenu.classList.contains('isOpen')) ? closeMenu($btnMenu, $menu) : openMenu($btnMenu, $menu);
        }
    });
}

function switchDarkMode(){
    const $btnSwitch = document.querySelector('.nav__link__btn-dark-mode'),
            $body = document.body;
}


const openMenu = (btnMenu, menuContainer) => {
    menuContainer.classList.remove('hidden');
    btnMenu.classList.add('isOpen');
    btnMenu.textContent = 'close';
    menuContainer.style.display = 'flex';
}

const closeMenu = (btnMenu, menuContainer) => {
    if (closeMenuTimeout) clearTimeout(closeMenuTimeout);

    menuContainer.classList.add('hidden');
    btnMenu.classList.remove('isOpen');
    btnMenu.textContent = 'menu';

    setTimeout(() => {
        menuContainer.style.display = 'none';
        closeMenuTimeout = null;
    }, 500)
}

function cancelCloseMenu() {
    if (closeMenuTimeout) {
        clearTimeout(closeMenuTimeout);
        closeMenuTimeout = null;
    }
}