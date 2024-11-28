const carousel = document.getElementById('carousel');
let itemWidth = carousel.children[0].clientWidth + 10; // Ancho del ítem + espacio entre ellos
let currentPosition = 0;

function moveCarousel(direction) {
  if (direction === 'left') {
    currentPosition -= itemWidth;
    if (currentPosition < 0) {
      carousel.style.transition = 'none';
      currentPosition = carousel.scrollWidth / 2 - itemWidth;
    }
  } else {
    currentPosition += itemWidth;
    if (currentPosition >= carousel.scrollWidth / 2) {
      carousel.style.transition = 'none';
      currentPosition = 0;
    }
  }
  carousel.style.transform = `translateX(-${currentPosition}px)`;
  setTimeout(() => carousel.style.transition = 'transform 0.5s ease', 50);
}