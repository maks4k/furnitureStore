const slides = document.querySelectorAll('.slide');

slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    // Удалить класс active со всех слайдов
    slides.forEach(s => s.classList.remove('active'));
    // Добавить класс active к текущему слайду
    slide.classList.add('active');
  });
});
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect:"fade",//эфект мерцания

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
effect:"fade",
  autoplay:{
      
      delay:2000,
      disableOnInteraction: false, // Не останавливать автопрокрутку при взаимодействии
      pauseOnMouseEnter: true, // Не паузировать автопрокрутку при наведении мыши(установили тру что бы наоборо запаузить)
      reverseDirection: false, // Не прокручивать в обратном направлении
  stopOnLastSlide: false, // Не останавливать автопрокрутку на последнем слайде
  waitForTransition: true // Ждать завершения перехода
  },
 
});