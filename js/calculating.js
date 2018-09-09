import {SETTINGS} from './data/game';

export const getScore = (answers, _leftNotes) => {
  if (answers.length < SETTINGS.questionsCount) {
    return -1;
  }

  let score = answers.reduce((sum, current) => {
    return sum + current.result;
  }, 0);

  return score;
};

export const getResult = (results, result) => {
  const score = result.score;
  if (result.leftTime === 0) {
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  if (result.leftNotes === 0) {
    return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
  }

  let scores = results.map((it) => it.score);
  scores.push(score);
  scores = scores.sort((first, second) => second - first);
  const rating = scores.indexOf(score) + 1;
  const gamersCount = scores.length;

  return `Вы заняли ${rating} место из ${gamersCount} игроков. Это лучше, чем у ${(gamersCount - rating) * 100 / gamersCount}% игроков`;
};
