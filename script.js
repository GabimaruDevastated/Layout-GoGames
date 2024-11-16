const body = document.querySelector('body'),
    header = document.querySelector('header'),
    headerButton = document.querySelector('.button_burger'),
    nav = document.querySelector('.nav');

headerButton.addEventListener('click', e => {
    headerButton.classList.toggle('burger_active')
    nav.classList.toggle('nav_active')
    body.classList.toggle('lock-screen')
    if (header.hasAttribute('style', 'padding-right: 17px')) {
        header.removeAttribute('style', 'padding-right: 17px')
    } else {
        header.setAttribute('style', 'padding-right: 17px')
    }
})