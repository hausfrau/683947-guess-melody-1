import {changeScreen, renderScreen, getOneOfThreeRandomInt} from './util.js';
import welcomeScreen from "./welcome";
import failTimeScreen from "./fail-time";
import resultSuccessScreen from "./result-success";
import failTriesScreen from "./fail-tries";

const template = `
<section class="game game--genre">
    <header class="game__header">
      <a class="game__back" href="#">
        <span class="visually-hidden">Сыграть ещё раз</span>
        <img class="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию">
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle class="timer__line" cx="390" cy="390" r="370"
                style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"/>
      </svg>

      <div class="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer__mins">05</span>
        <span class="timer__dots">:</span>
        <span class="timer__secs">00</span>
      </div>

      <div class="game__mistakes">
        <div class="wrong"></div>
        <div class="wrong"></div>
        <div class="wrong"></div>
      </div>
    </header>

    <section class="game__screen">
      <h2 class="game__title">Выберите инди-рок треки</h2>
      <form class="game__tracks">
        <div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-1">
            <label class="game__check" for="answer-1">Отметить</label>
          </div>
        </div>

        <div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-2">
            <label class="game__check" for="answer-2">Отметить</label>
          </div>
        </div>

        <div class="track">
          <button class="track__button track__button--pause" type="button"></button>
          <div class="track__status">
            <audio></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-3">
            <label class="game__check" for="answer-3">Отметить</label>
          </div>
        </div>

        <div class="track">
          <button class="track__button track__button--play" type="button"></button>
          <div class="track__status">
            <audio></audio>
          </div>
          <div class="game__answer">
            <input class="game__input visually-hidden" type="checkbox" name="answer" value="answer-1" id="answer-4">
            <label class="game__check" for="answer-4">Отметить</label>
          </div>
        </div>

        <button class="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  </section>`;

const gameGenreScreen = renderScreen(template);

const gameInputs = Array.from(gameGenreScreen.querySelectorAll(`.game__input`));

const toggleGameInputs = () => gameInputs.forEach((it) => {
  it.checked = false;
});

const gameLogo = gameGenreScreen.querySelector(`.game__logo`);

const gameSubmit = gameGenreScreen.querySelector(`.game__submit`);

const toggleGameSubmit = (flag) => {
  gameSubmit.disabled = flag;
};

export const clearActions = () => {
  toggleGameInputs();
  toggleGameSubmit(true);
};

gameLogo.addEventListener(`click`, () => {
  clearActions();
  changeScreen(welcomeScreen);
});

let randomScreen = resultSuccessScreen;

switch (getOneOfThreeRandomInt()) {
  case 1 :
    randomScreen = failTriesScreen;
    break;
  case 2 :
    randomScreen = failTimeScreen;
    break;
}

gameSubmit.addEventListener(`click`, () => changeScreen(randomScreen));

gameInputs.forEach((it) => {
  it.addEventListener(`click`, () => {
    toggleGameSubmit(false);
  });
});

toggleGameSubmit(true);

export default gameGenreScreen;
