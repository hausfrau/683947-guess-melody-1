import {changeScreen, renderScreen} from './util.js';
import getHeaderElement from './game-header';
import gameGenreScreen from './game-genre';
import welcomeScreen from './welcome';
import GAME from "./data/game-data";
import {loadAudio} from './audio';
import {bindGenrePlayButtonListener, loadGenreTrack} from './game-genre';

let audio;
let playButton;

const gameArtistScreen = (data, state) => {
  const template = `
  <section class="game game--artist">
    ${getHeaderElement(state)}
    <section class="game__screen">
      <h2 class="game__title">${data.title}</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio></audio>
      </div>
      <form class="game__artist">
      ${[...data.questions].map((question, index) => `
        <div class="artist">
          <input class="artist__input visually-hidden" type="radio" name="answer" value="artist-${index}" id="answer-${index}">
          <label class="artist__name" for="answer-${index}">
            <img class="artist__picture" src="${question.picture}" alt="${question.name}">
            ${question.name}
          </label>
        </div>`).join(``)}
      </form>
    </section>
  </section>`;

  const artistScreenElement = renderScreen(template);

  const onArtistClick = () => {
    audio.pause();
    changeScreen(gameGenreScreen(GAME[`screen-2`], Object.assign({}, state, {
      'screen': `screen-2`
    })));

    bindGenrePlayButtonListener();

    loadGenreTrack(GAME[`screen-2`].questions[0].track.src);
  };

  Array.from(artistScreenElement.querySelectorAll(`.game__artist .artist__input`)).forEach((it) => it.addEventListener(`click`, onArtistClick));

  const gameLogo = artistScreenElement.querySelector(`.game__logo`);

  gameLogo.addEventListener(`click`, () => {
    audio.pause();
    changeScreen(welcomeScreen(Object.assign({}, state, {
      'screen': `screen-0`
    })));
  });

  return artistScreenElement;
};

export const loadTrack = (link) => {
  audio = loadAudio(link);
};

export const bindPlayButtonListener = () => {

  playButton = document.querySelector(`.track__button`);

  playButton.classList.remove(`track__button--play`);
  playButton.classList.add(`track__button--pause`);

  playButton.addEventListener(`click`, () => {
    if (playButton.classList.contains(`track__button--pause`)) {
      audio.pause();
      playButton.classList.remove(`track__button--pause`);
      playButton.classList.add(`track__button--play`);
    } else {
      audio.play();
      playButton.classList.remove(`track__button--play`);
      playButton.classList.add(`track__button--pause`);
    }
  });
};

export default gameArtistScreen;
