'use strict';

const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

const app = document.querySelector(`.app`);
const main = app.querySelector(`.main`);
const templates = document.querySelectorAll(`template`);
const screens = Array.from(templates).map((it) => it.content.querySelector(`section`).cloneNode(true));

let currentScreen = 0;

const swap = (left, right) => {
  const temp = screens[left];
  screens[left] = screens[right];
  screens[right] = temp;
};

const getScreen = (ind) => {
  return screens[ind];
};

const appendScreen = (screen) => {
  main.innerHTML = ``;
  main.appendChild(getScreen(screen));
};

const selectScreen = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  currentScreen = index;
  appendScreen(currentScreen);
};

const onLeftArrowButtonClick = () => selectScreen(currentScreen - 1);

const onRightArrowButtonClick = () => selectScreen(currentScreen + 1);

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      onRightArrowButtonClick();
      break;
    case LEFT_ARROW:
      onLeftArrowButtonClick();
      break;
  }
});

const createButton = (directionLeft) => {
  const button = document.createElement(`button`);
  button.classList.add(`arrows__btn`);
  button.style.background = `none`;
  button.innerText = directionLeft ? `<-` : `->`;
  button.style.border = `2px solid black`;
  button.style.padding = `5px 20px`;
  button.addEventListener(`click`, directionLeft ? onLeftArrowButtonClick : onRightArrowButtonClick);
  return button;
};

const createArrowsWrap = () => {
  const arrowsWrap = document.createElement(`div`);
  arrowsWrap.classList.add(`arrows__wrap`);
  arrowsWrap.style.position = `absolute`;
  arrowsWrap.style.top = `135px`;
  arrowsWrap.style.left = `50%`;
  arrowsWrap.style.marginLeft = `-56px`;
  arrowsWrap.appendChild(createButton(true));
  arrowsWrap.appendChild(createButton(false));
  app.appendChild(arrowsWrap);
};

createArrowsWrap();

swap(1, 2);

selectScreen(0);
