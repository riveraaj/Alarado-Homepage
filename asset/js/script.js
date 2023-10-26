window.addEventListener('DOMContentLoaded', () => {
    openMobileMenu();
    toggleDarkMode();
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

function toggleDarkMode() {
    const $btnSwitch = document.querySelector('.nav__link__btn-dark-mode'),
        $body = document.body,
        $parentHeroText = document.querySelector('.hero__text'),
        $tittleDarkMode = $parentHeroText.querySelector('h1'),
        $spanDarkMode = $parentHeroText.querySelector('span'),
        $pathLogo = document.querySelectorAll('.nav__logo-menu_link__path');

    $btnSwitch.addEventListener('click', () => {
        ($btnSwitch.classList.contains('inDarkMode')) ? switchToLightMode($body, $tittleDarkMode, $spanDarkMode, $btnSwitch, $pathLogo) : switchToDarkMode($body, $tittleDarkMode, $spanDarkMode, $btnSwitch, $pathLogo);

    });
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

const switchToLightMode = ($body, $tittleDarkMode, $spanDarkMode, $btnSwitch, $pathLogo) => {
    $body.classList.remove('dark-mode');
    $tittleDarkMode.classList.remove('dark-mode');
    $spanDarkMode.classList.remove('dark-mode');
    $btnSwitch.classList.remove('inDarkMode');
    $pathLogo.forEach(x => x.classList.remove('dark-mode'));
}

const switchToDarkMode = ($body, $tittleDarkMode, $spanDarkMode, $btnSwitch, $pathLogo) => {
    $body.classList.add('dark-mode');
    $tittleDarkMode.classList.add('dark-mode');
    $spanDarkMode.classList.add('dark-mode');
    $btnSwitch.classList.add('inDarkMode');
    $pathLogo.forEach(x => x.classList.add('dark-mode'));
}