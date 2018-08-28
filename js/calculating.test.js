import {assert} from 'chai';
import {getResult, getScore} from './calculating';

describe(`Check getScore()`, () => {
  it(`should return -1 when not all answers`, () => {
    assert.equal(-1, getScore([
      {
        answerSuccess: true,
        answerTime: 12000
      },
      {
        answerSuccess: true,
        answerTime: 12000
      }]));
  });

  it(`should return 10 when all success not fast answers`, () => {
    assert.equal(10, getScore([
      {
        answerSuccess: true,
        answerTime: 35000
      },
      {
        answerSuccess: true,
        answerTime: 35000
      },
      {
        answerSuccess: true,
        answerTime: 35000
      },
      {
        answerSuccess: true,
        answerTime: 35000
      },
      {
        answerSuccess: true,
        answerTime: 35000
      },
      {
        answerSuccess: true,
        answerTime: 35000
      },
      {
        answerSuccess: true,
        answerTime: 35000
      },
      {
        answerSuccess: true,
        answerTime: 35000
      },
      {
        answerSuccess: true,
        answerTime: 35000
      },
      {
        answerSuccess: true,
        answerTime: 35000
      }
    ]));
  });

  it(`should return 20 when all success fast answers`, () => {
    assert.equal(20, getScore([
      {
        answerSuccess: true,
        answerTime: 10000
      },
      {
        answerSuccess: true,
        answerTime: 10000
      },
      {
        answerSuccess: true,
        answerTime: 10000
      },
      {
        answerSuccess: true,
        answerTime: 10000
      },
      {
        answerSuccess: true,
        answerTime: 10000
      },
      {
        answerSuccess: true,
        answerTime: 10000
      },
      {
        answerSuccess: true,
        answerTime: 10000
      },
      {
        answerSuccess: true,
        answerTime: 10000
      },
      {
        answerSuccess: true,
        answerTime: 10000
      },
      {
        answerSuccess: true,
        answerTime: 10000
      }
    ]));
  });

  it(`should return -20 when all error answers`, () => {
    assert.equal(-20, getScore([
      {
        answerSuccess: false,
        answerTime: 35000
      },
      {
        answerSuccess: false,
        answerTime: 3000
      },
      {
        answerSuccess: false,
        answerTime: 1000
      },
      {
        answerSuccess: false,
        answerTime: 8000
      },
      {
        answerSuccess: false,
        answerTime: 35000
      },
      {
        answerSuccess: false,
        answerTime: 15000
      },
      {
        answerSuccess: false,
        answerTime: 7000
      },
      {
        answerSuccess: false,
        answerTime: 5000
      },
      {
        answerSuccess: false,
        answerTime: 35000
      },
      {
        answerSuccess: false,
        answerTime: 3000
      }
    ]));
  });

  it(`should return 0 when half success fast answers and half error answers`, () => {
    assert.equal(0, getScore([
      {
        answerSuccess: false,
        answerTime: 35000
      },
      {
        answerSuccess: false,
        answerTime: 3000
      },
      {
        answerSuccess: false,
        answerTime: 1000
      },
      {
        answerSuccess: false,
        answerTime: 8000
      },
      {
        answerSuccess: false,
        answerTime: 35000
      },
      {
        answerSuccess: true,
        answerTime: 15000
      },
      {
        answerSuccess: true,
        answerTime: 7000
      },
      {
        answerSuccess: true,
        answerTime: 5000
      },
      {
        answerSuccess: true,
        answerTime: 29000
      },
      {
        answerSuccess: true,
        answerTime: 3000
      }
    ]));
  });
});

const results = [
  {
    score: 1,
    leftNotes: 2,
    leftTime: 300
  },
  {
    score: 9,
    leftNotes: 2,
    leftTime: 300
  },
  {
    score: 3,
    leftNotes: 2,
    leftTime: 300
  },
  {
    score: 7,
    leftNotes: 2,
    leftTime: 300
  },
  {
    score: 4,
    leftNotes: 2,
    leftTime: 300
  },
  {
    score: 2,
    leftNotes: 2,
    leftTime: 300
  },
  {
    score: 5,
    leftNotes: 2,
    leftTime: 300
  },
  {
    score: 8,
    leftNotes: 2,
    leftTime: 300
  },
  {
    score: 6,
    leftNotes: 2,
    leftTime: 300
  }
];

const mokeResult = (score_, leftNotes_, leftTime_) => ({
  score: score_,
  leftNotes: leftNotes_,
  leftTime: leftTime_
});

describe(`Check getResult()`, () => {
  it(`should return time is over`, () => {
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, getResult(results, mokeResult(3, 1, 0)));
  });

  it(`should return tries is over`, () => {
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, getResult(results, mokeResult(3, 0, 1)));
  });

  it(`should return the first place from 10`, () => {
    assert.equal(`Вы заняли 1 место из 10 игроков. Это лучше, чем у 90% игроков`, getResult(results, mokeResult(10, 1, 10000)));
  });

  it(`should return the 4 place from 10`, () => {
    assert.equal(`Вы заняли 1 место из 10 игроков. Это лучше, чем у 90% игроков`, getResult(results, mokeResult(10, 1, 10000)));
  });
});
