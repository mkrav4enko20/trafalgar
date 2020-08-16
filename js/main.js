// navigation
const headerBurger = document.querySelector('.header__burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close')

headerBurger.addEventListener('click', showNavigation);
navigationClose.addEventListener('click', hideNavigation);

function showNavigation() {
    navigation.classList.add('navigation_open', 'navigation_anim');
}

function hideNavigation() {
    navigation.classList.remove('navigation_open')
}

// modal

const modalButtons = document.querySelectorAll('[data-modal]')
const modalOverlay = document.querySelector('.modal__overlay');
const modalClose = document.querySelectorAll('.modal__close');

modalButtons.forEach(function (button) {
    button.addEventListener('click', showModal)
});

modalClose.forEach(function(close) {
    close.addEventListener('click', hideModal)
}) 

function showModal(event) {
    const data = event.target.getAttribute("data-modal")
    const modal = document.querySelector(data); 
    modalOverlay.classList.add('modal__overlay_open', 'modal__overlay_anim')
    modal.classList.add('modal_open')
}
function hideModal() {
    const modals = document.querySelectorAll('.modal')
    modals.forEach(function(modal) {
        modal.classList.remove('modal_open')
    });
    modalOverlay.classList.remove('modal__overlay_open')
}

//scroll 

const headerLink = document.querySelector('.header__navigation .nav__home');
const headerLinks = document.querySelectorAll('.header__navigation .nav__text');
const navLinks = document.querySelectorAll('.navigation__link');

headerLink.addEventListener('click', scrollToElement);
headerLinks.forEach(function(link) {
    link.addEventListener('click', scrollToElement);
});
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        hideNavigation();
        scrollToElement(event);
    });
})

function scrollToElement(event) {
    event.preventDefault();

    const href = event.target.getAttribute('href')
    const block = document.querySelector(href);

    window.scrollTo({
        top:block.offsetTop,
        behavior: "smooth"
    });
}
function scrollToElement(event) {
    event.preventDefault();

    const href = event.target.getAttribute('href')
    const block = document.querySelector(href);

    window.scrollTo({
        top: block.offsetTop,
        behavior: "smooth"
    });
}

// slider

const slider = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
    },
    pagination: {
        el: '.reviews__pagination',
        clickable: true,
    },
})