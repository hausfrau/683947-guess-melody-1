import {changeScreen, renderScreen} from './util';
import {SETTINGS} from './data/game';
import GAME from './data/game-data';
import {getMinutesFromMilliseconds} from './timer';
import gameArtistScreen, {bindPlayButtonListener, loadTrack} from './game-artist';

const template = `
<section class="welcome">
    <div class="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <button class="welcome__button"><span class="visually-hidden">Начать игру</span></button>
    <h2 class="welcome__rules-title">Правила игры</h2>
    <p class="welcome__text">Правила просты:</p>
    <ul class="welcome__rules-list">
      <li>За ${getMinutesFromMilliseconds(SETTINGS.totalTime)} минут нужно ответить на все вопросы.</li>
      <li>Можно допустить ${SETTINGS.mistakesCount} ошибки.</li>
    </ul>
    <p class="welcome__text">Удачи!</p>
  </section>`;

let welcomeScreenElement;

const welcomeScreen = (state) => {
  welcomeScreenElement = renderScreen(template);

  const welcomeButton = welcomeScreenElement.querySelector(`.welcome__button`);

  welcomeButton.addEventListener(`click`, () => {
    changeScreen(gameArtistScreen(GAME[`screen-1`], Object.assign({}, state, {
      'screen': `screen-1`
    })));

    loadTrack(GAME[`screen-1`].questions[0].src);

    bindPlayButtonListener();
  });

  return welcomeScreenElement;
};

export default welcomeScreen;
