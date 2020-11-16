
// Menu
const toggleOpen = document.querySelector('[data-menu-open]');
const menu = document.querySelector('[data-menu]');

const main = document.querySelector('main');
const header = document.querySelector('header');
const contentText = document.querySelectorAll('.content__text');

toggleOpen.addEventListener('click', toggleMenu);

function toggleMenu() {

    main.classList.toggle('main--reduzido');
    header.classList.toggle('header--reduzido');

    contentText.forEach(content => {

        content.classList.toggle('content__text--reduzido');
    })

    toggleOpen.classList.toggle('ativo');
    menu.classList.toggle('header__menu--ativo');
}