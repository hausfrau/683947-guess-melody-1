import {changeScreen, renderScreen} from './util.js';
import getHeaderElement from './game-header';
import welcomeScreen from './welcome';
import failTriesScreen from './fail-tries';
import failTimeScreen from './fail-time';
import resultSuccessScreen from './result-success';
import {loadAudio} from "./audio";

let audio;
let playButtons;

const gameGenreScreen = (data, state) => {
  const template = `
<section class="game game--genre">
    ${getHeaderElement(state)}
    <section class="game__screen">
      <h2 class="game__title">${data.title}</h2>
      <form class="game__tracks">
      ${[...data.questions].map((question, index) => `
        <div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-${index}" id="answer-${index}">
            <label class="game__check" for="answer-${index}">Отметить</label>
          </div>
        </div>`).join(``)}
        <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  </section>`;

  const genreScreenElement = renderScreen(template);

  const gameInputs = Array.from(genreScreenElement.querySelectorAll(`.game__input`));

  const toggleGameInputs = () => gameInputs.forEach((it) => {
    it.checked = false;
  });

  const gameSubmit = genreScreenElement.querySelector(`.game__submit`);

  const toggleGameSubmit = (flag) => {
    gameSubmit.disabled = flag;
  };

  const clearActions = () => {
    toggleGameInputs();
    toggleGameSubmit(true);
  };

  const gameLogo = genreScreenElement.querySelector(`.game__logo`);

  gameLogo.addEventListener(`click`, () => {
    clearActions();
    audio.pause();
    changeScreen(welcomeScreen(Object.assign({}, state, {
      'screen': `screen-0`
    })));
  });

  gameInputs.forEach((it) => {
    it.addEventListener(`click`, () => {
      toggleGameSubmit(false);
    });
  });

  gameSubmit.addEventListener(`click`, () => {
    if (state.leftNotes === 0) {
      audio.pause();
      changeScreen(failTriesScreen(Object.assign({}, state, {
        'screen': `screen-3`
      })));
    } else if (state.leftTime === 0) {
      audio.pause();
      changeScreen(failTimeScreen(Object.assign({}, state, {
        'screen': `screen-4`
      })));
    } else {
      audio.pause();
      changeScreen(resultSuccessScreen(Object.assign({}, state, {
        'screen': `screen-5`
      })));
    }
  });

  toggleGameSubmit(true);

  return genreScreenElement;
};

export const loadGenreTrack = (link) => {
  audio = loadAudio(link);
  playButtons = document.querySelectorAll(`.track__button`);
  playButtons[0].classList.remove(`track__button--play`);
  playButtons[0].classList.add(`track__button--pause`);
};

export const bindGenrePlayButtonListener = () => {
  playButtons = document.querySelectorAll(`.track__button`);

  const pauseAllTracks = () => {
    Array.from(playButtons).forEach((it) => {
      it.classList.remove(`track__button--pause`);
      it.classList.add(`track__button--play`);
    });
  };

  Array.from(playButtons).forEach((it) => it.addEventListener(`click`, () => {
    it.addEventListener(`click`, () => {
      pauseAllTracks();
      if (it.classList.contains(`track__button--pause`)) {
        audio.pause();
        it.classList.remove(`track__button--pause`);
        it.classList.add(`track__button--play`);
      } else {
        audio.play();
        it.classList.remove(`track__button--play`);
        it.classList.add(`track__button--pause`);
      }
    });
  }));
};

export default gameGenreScreen;
