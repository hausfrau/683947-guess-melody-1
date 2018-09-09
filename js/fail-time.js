import {changeScreen, renderScreen} from './util.js';
import welcomeScreen from './welcome.js';
import {INITIAL_STATE} from './data/game';

const failTimeScreen = () => {
  const template = `
  <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Увы и ах!</h2>
    <p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>
  </section>`;

  const failTimeElement = renderScreen(template);

  const resultReplay = failTimeElement.querySelector(`.result__replay`);

  resultReplay.addEventListener(`click`, () => {
    changeScreen(welcomeScreen(Object.assign({}, INITIAL_STATE, {
      'screen': `screen-0`
    })));
  });

  return failTimeElement;
};

export default failTimeScreen;
