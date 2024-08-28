// selection variants
const hambMenu = document.querySelector(".hamb-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const body = document.body;
const carousel = document.querySelector('.card-carousel');

// function handleClick
hambMenu.addEventListener('click', () => {
    hambMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
});
// function handleScroll
carousel.addEventListener('scroll', () => {
  carousel.style.filter = 'none'; 
});