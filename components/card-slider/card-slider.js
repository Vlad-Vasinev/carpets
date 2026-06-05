import { isDesktop } from '../check-viewport/check-viewport.js';
import { mobTouchEnd, mobTouchStart } from '../mob-touch.js/mob-touch.js';

const cards = document.querySelectorAll('[data-product-card]');

if (cards.length > 0) {

  cards.forEach((card) => {
    const cardImg = card.querySelector('.card__img');
    const cardWidth = cardImg?.getBoundingClientRect().width;
    const cardHeight = cardImg?.getBoundingClientRect().height;

    const images = card.querySelectorAll('.card__img img');
    const imagesLength = images.length;
    const cardPreview = card.querySelector('.card__previews');

    if (cardWidth && cardHeight) {
      const imageWidth = Math.round(cardWidth / imagesLength);

      let activeIndex;
      const activeImage = card.querySelector('.card__img--active');
      if (activeImage) {
        activeIndex = activeImage.dataset.index;
      }

      const dotsWrapper = card.querySelector('.card__dots');

      for (let i = 0; i < imagesLength; i++) {

        const imagePreview = document.createElement('div');
        imagePreview.classList.add('card__preview');
        imagePreview.setAttribute('data-index', i);
        imagePreview.style.width = imageWidth + 'px';
        imagePreview.style.height = cardHeight + 'px';
        imagePreview.style.left = imageWidth * i + 'px';
        cardPreview?.appendChild(imagePreview);

        const dot = document.createElement('span');
        dot.setAttribute('data-index', i);
        dotsWrapper?.appendChild(dot);

        if (i === Number(activeIndex)) {
          dot.classList.add('card__dots--active');
        }
      }

      const previews = card.querySelectorAll('.card__preview');
      if (previews.length > 0) {
        const dotsItems = dotsWrapper?.querySelectorAll('.card__dots span');

        let activeIndex = 0;

        if (isDesktop()) {
          cardPreview?.addEventListener('mouseover', function (event) {
            const target = event.target;
            const targetPreview = target.closest('.card__preview');

            if (!targetPreview) return;

            card.querySelector('.card__img--active')?.classList.remove('card__img--active');
            card.querySelector('.card__dots--active')?.classList.remove('card__dots--active');
            if (dotsWrapper) dotsWrapper.classList.remove('card__dots--active');

            const newIndex = Number(targetPreview.dataset.index);

            if (activeIndex !== undefined) {
              images[activeIndex]?.classList.remove('card__img--active');
              if (dotsItems) {
                dotsItems[activeIndex]?.classList.remove('card__dots--active');
                if (dotsWrapper) dotsWrapper.classList.remove('card__dots--active');
              }
            }

            images[newIndex]?.classList.add('card__img--active');
            if (dotsItems) {
              dotsItems[newIndex]?.classList.add('card__dots--active');
              if (dotsWrapper) dotsWrapper.classList.add('card__dots--active');
            }

            activeIndex = newIndex;
          });

          cardPreview?.addEventListener('mouseout', function () {
            if (dotsWrapper) dotsWrapper.classList.remove('card__dots--active');
          });
        } else {
          card.addEventListener('touchstart', (e) => mobTouchStart(e));
          card.addEventListener('touchend', (e) => mobTouchEnd(e, images, dotsItems));
        }
      }
    }
  });
}