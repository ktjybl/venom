const btnMenu=document.querySelector('.menu-button');
const closeMenu=document.querySelector('.menu-close');
const menuElem=document.querySelector('.nav-menu');

const showMenu=()=>{
        menuElem.classList.add('is-active');
       closeMenu.classList.add('is-active');
};

const hideMenu=()=>{
        menuElem.classList.remove('is-active');
       closeMenu.classList.remove('is-active');
};

btnMenu.addEventListener('click', showMenu);
closeMenu.addEventListener('click', hideMenu);