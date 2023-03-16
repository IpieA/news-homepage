//Hamburger menu icon
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', transformHamburger)

function transformHamburger() {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
}

document.querySelectorAll('nav ul li a').forEach(el => 
    el.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
}))