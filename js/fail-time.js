import {changeScreen, renderScreen} from './util.js';
import welcomeScreen from './welcome.js';
import {clearActions} from './game-genre.js';

const template = `
  <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Увы и ах!</h2>
    <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>
  </section>`;

const failTimeScreen = renderScreen(template);

const resultReplay = failTimeScreen.querySelector(`.result__replay`);

resultReplay.addEventListener(`click`, () => {
  clearActions();
  changeScreen(welcomeScreen);
});

export default failTimeScreen;
