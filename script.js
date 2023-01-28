const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');

let currentItemIndex = 0;
let isAnimating = false;

function goToItem(index) {
  if (index < 0) {
    index = carouselItems.length - 1;
  } else if (index > carouselItems.length - 1) {
    index = 0;
  }

  carouselItems.forEach(item => item.classList.remove('active'));
  carouselItems[index].classList.add('active');

  currentItemIndex = index;
}

function goToPrevItem() {
  goToItem(currentItemIndex - 1);
}

function goToNextItem() {
  goToItem(currentItemIndex + 1);
}

prevButton.addEventListener('click', goToPrevItem);
nextButton.addEventListener('click', goToNextItem);

goToItem(0);