let pageIndex = document.querySelector(".page--index");

/* promo-slider */

if (pageIndex) {
  let slides = document.querySelectorAll(".slider__item");
  let currentPosition = 0;
  let slidePosition = slides[currentPosition];
  let roundButtons = document.querySelectorAll(".promo__slider-button");
  let roundButtonsContainer = document.querySelector(".promo__slider-buttons");
  let buttonPosition = roundButtons.item(currentPosition);

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slider__item--current");
    roundButtons[i].classList.remove("promo__slider-button--active")
  }

  slidePosition.classList.add("slider__item--current");
  buttonPosition.classList.add("promo__slider-button--active");

  roundButtonsContainer.addEventListener("click", function(evt) {
    let targetClickSlide = evt.target;
    if (targetClickSlide.classList.contains("promo__slider-button")) {
      if (!targetClickSlide.classList.contains("promo__slider-button--active")) {
        slidePosition.classList.remove("slider__item--current");
        buttonPosition.classList.remove("promo__slider-button--active");
        for (i = 0; i < roundButtons.length; i++) {
          if (roundButtons[i] === targetClickSlide) {
            currentPosition = i;
            slidePosition = slides.item(currentPosition);
            buttonPosition = roundButtons.item(currentPosition);
            slidePosition.classList.add("slider__item--current");
            buttonPosition.classList.add("promo__slider-button--active");
          }
        }
      }
    }
  })
}

/* services-slider */

if (pageIndex) {

  let serviceButtons = document.querySelectorAll(".services__button");
  let serviceContent = document.querySelectorAll(".services__content-item");
  let sliderCurrentPosition = 0;
  let activeServicesButton = serviceButtons.item(sliderCurrentPosition);
  let activeContent = serviceContent.item(sliderCurrentPosition);
  let servicesNavigation = document.querySelector(".services__tabs");

  for (let i = 0; i < serviceButtons.length; i++) {
    serviceButtons[i].classList.remove("services__button--active");
    serviceContent[i].classList.remove("services__content-item--active");
  }

  activeServicesButton.classList.add("services__button--active");
  activeContent.classList.add("services__content-item--active");

  servicesNavigation.addEventListener("click", function(evt) {
    let targetClickSlide = evt.target;
    if (targetClickSlide.classList.contains("services__button")) {
      if (!targetClickSlide.classList.contains("services__button--active")) {
        activeServicesButton.classList.remove("services__button--active");
        activeContent.classList.remove("services__content-item--active");
        for (let i = 0; i < serviceButtons.length; i++) {
          if (serviceButtons[i] === targetClickSlide) {
            currentPosition = i;
            activeServicesButton = serviceButtons.item(currentPosition);
            activeServicesButton.classList.add("services__button--active");
            activeContent = serviceContent.item(currentPosition);
            activeContent.classList.add("services__content-item--active");
          }
        }
      }
    }
  })
}

/* modal show */

let feedback = document.querySelector(".device-link--feedback");
let modalFeedback = document.querySelector(".modal--feedback");
let map = document.querySelector(".contacts__map");
let modalMap  = document.querySelector(".modal--map");



if (pageIndex) {
  let form = modalFeedback.querySelector(".feedback");

  if (feedback) {
    feedback.addEventListener("click", function(evt) {
      evt.preventDefault();
      modalFeedback.classList.add("modal--active");
    })
  }

  if (map) {
    map.addEventListener("click", function(evt) {
      evt.preventDefault();
      modalMap.classList.add("modal--active");
    })
  }

  form.addEventListener("submit", function(evt) {
    let formName = modalFeedback.querySelector("input[name=name]");
    let formMail = modalFeedback.querySelector("input[name=mail]");
    let formText = modalFeedback.querySelector("textarea[name=feedback]");

    if (!formName.value || !formMail.value || !formText.value) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal--error");
      modalFeedback.offsetWidth = modalFeedback.offsetWidth;
      modalFeedback.classList.add("modal--error");
    }
  })
}

/* modal close */

let closeButtons = document.querySelectorAll(".modal__close");

if (closeButtons) {
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function() {
      if (this.parentElement) {
        this.parentElement.classList.remove("modal--active");
        this.parentElement.classList.remove("modal--error");
      }
    })
  }
}

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    let openPopup = document.querySelector(".modal--active");
      if (openPopup) {
          evt.preventDefault();
          openPopup.classList.remove("modal--active");
          openPopup.classList.remove("modal--error");
      }
  }
});
