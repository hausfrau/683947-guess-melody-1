import {changeScreen, renderScreen} from './util.js';
import welcomeScreen from './welcome.js';
import {clearActions} from './game-genre.js';

const template = `
  <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">Какая жалость!</h2>
    <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>
  </section>`;

const failTriesScreen = renderScreen(template);

const resultReplay = failTriesScreen.querySelector(`.result__replay`);

resultReplay.addEventListener(`click`, () => {
  clearActions();
  changeScreen(welcomeScreen);
});

export default failTriesScreen;
