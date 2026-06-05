let dist = 20;
let startXSwipe = 0;
let startYSwipe = 0;

export function mobTouchStart(e) {
  startXSwipe = e.touches[0].clientX;
  startYSwipe = e.touches[0].clientY;
}

export function mobTouchEnd(e, slides, dotsItems) {
  let xEnd = e.changedTouches[0].clientX;
  let yEnd = e.changedTouches[0].clientY;
  let diffX = startXSwipe - xEnd;
  let diffY = startYSwipe - yEnd;

  let slidesArr = Array.from(slides);
  let activeIndex = slidesArr.findIndex(el => 
    el.classList.contains('card__img--active')
  );
  let dotsArr = Array.from(dotsItems);

  if (Math.abs(diffX - diffY) > 0 && Math.abs(diffX) > dist) {

    if (activeIndex === -1) return;

    if (diffX > 0 && activeIndex + 1 < slides.length) {
      slidesArr[activeIndex].classList.remove('card__img--active');
      slidesArr[activeIndex + 1].classList.add('card__img--active');

      dotsArr[activeIndex].classList.remove('card__dots--active');
      dotsArr[activeIndex + 1].classList.add('card__dots--active');
      return;
    }
    else if (diffX < 0 && activeIndex - 1 >= 0) {
      slidesArr[activeIndex].classList.remove('card__img--active');
      slidesArr[activeIndex - 1].classList.add('card__img--active');

      dotsArr[activeIndex].classList.remove('card__dots--active');
      dotsArr[activeIndex - 1].classList.add('card__dots--active');
      return;
    }
  }
}