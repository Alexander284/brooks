'use strict';

window.addEventListener('DOMContentLoaded', () => {

  const iconMenu = document.querySelector('.header__icon-menu')

  if (iconMenu) {
    const menu = document.querySelector('.header__body')
    iconMenu.addEventListener('click', () => {
      document.body.classList.toggle('_lock')
      iconMenu.classList.toggle('_active');
      menu.classList.toggle('_active')
    })

  }

  function slider({container, slide, wrapper, field}) {
    // Slider
    
    const arrSlide = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          slidesWrapper = document.querySelector(wrapper),
          slidesFild = document.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width

    let offset = 0
      
    slidesFild.style.cssText = `
      width: ${100 * arrSlide.length}%;
      display: flex;
      transition: 0.5s all;
    `
    slidesWrapper.style.overflow = 'hidden'
    slidesFild.style.display = 'flex'
    
    arrSlide.forEach(slide => {
        slide.style.width = width;
    })

    slider.style.position = 'relative';
    const indicators = document.createElement('ul'),
          dots = []
    indicators.classList.add('carousel-indicators')
    slider.append(indicators)
      
    for (let i = 0; i < arrSlide.length; i++){
      const dot = document.createElement('li')
      dot.classList.add('dot')
      dot.setAttribute('data-slide-to', i + 1)
      
      if(i == 0){
          dot.style.opacity = 1
      };

      indicators.append(dot)
      dots.push(dot)
    }

    function opacityDots() {
      dots.forEach(dot => dot.style.opacity = '.5')
    }


    function removeNotNum(str) {
      return +str.replace(/\D/g, '')
    }

    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        const slideTo = e.target.getAttribute('data-slide-to')

        offset = removeNotNum(width) * (slideTo - 1)

        slidesFild.style.transform = `translateX(-${offset}px)`

        opacityDots();
        dot.style.opacity = '1'

      })
    })
  }

  slider({
    container: '.slider',
    slide: '.slider__slid',
    wrapper: '.slider__slid-wrapper',
    field: '.slider__slid-inner'
  })

})