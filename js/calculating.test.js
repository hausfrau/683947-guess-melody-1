import {assert} from 'chai';
import {getResult, getScore} from './calculating';

describe(`Check getScore()`, () => {
  it(`should return -1 when not all answers`, () => {
    assert.equal(-1, getScore([
      {
        result: 1,
        time: 12000
      },
      {
        result: 1,
        time: 12000
      }], 0));
  });

  it(`should return 10 when all correct and not fast answers`, () => {
    assert.equal(10, getScore([
      {
        result: 1,
        time: 35000
      },
      {
        result: 1,
        time: 35000
      },
      {
        result: 1,
        time: 35000
      },
      {
        result: 1,
        time: 35000
      },
      {
        result: 1,
        time: 35000
      },
      {
        result: 1,
        time: 35000
      },
      {
        result: 1,
        time: 35000
      },
      {
        result: 1,
        time: 35000
      },
      {
        result: 1,
        time: 35000
      },
      {
        result: 1,
        time: 35000
      }
    ], 0));
  });

  it(`should return 20 when all correct fast answers`, () => {
    assert.equal(20, getScore([
      {
        result: 2,
        time: 10000
      },
      {
        result: 2,
        time: 10000
      },
      {
        result: 2,
        time: 10000
      },
      {
        result: 2,
        time: 10000
      },
      {
        result: 2,
        time: 10000
      },
      {
        result: 2,
        time: 10000
      },
      {
        result: 2,
        time: 10000
      },
      {
        result: 2,
        time: 10000
      },
      {
        result: 2,
        time: 10000
      },
      {
        result: 2,
        time: 10000
      }
    ], 0));
  });

  it(`should return -20 when all error answers`, () => {
    assert.equal(-20, getScore([
      {
        result: -2,
        time: 35000
      },
      {
        result: -2,
        time: 3000
      },
      {
        result: -2,
        time: 1000
      },
      {
        result: -2,
        time: 8000
      },
      {
        result: -2,
        time: 35000
      },
      {
        result: -2,
        time: 15000
      },
      {
        result: -2,
        time: 7000
      },
      {
        result: -2,
        time: 5000
      },
      {
        result: -2,
        time: 35000
      },
      {
        result: -2,
        time: 3000
      }
    ], 0));
  });

  it(`should return 0 when half error answers and half correct fast answers`, () => {
    assert.equal(0, getScore([
      {
        result: -2,
        time: 35000
      },
      {
        result: -2,
        time: 3000
      },
      {
        result: -2,
        time: 1000
      },
      {
        result: -2,
        time: 8000
      },
      {
        result: -2,
        time: 35000
      },
      {
        result: 2,
        time: 15000
      },
      {
        result: 2,
        time: 7000
      },
      {
        result: 2,
        time: 5000
      },
      {
        result: 2,
        time: 29000
      },
      {
        result: 2,
        time: 3000
      }
    ], 0));
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
  it(`should return time is over when lefttime is 0`, () => {
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, getResult(results, mokeResult(3, 1, 0)));
  });

  it(`should return tries is over when leftnotes is 0`, () => {
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, getResult(results, mokeResult(3, 0, 1)));
  });

  it(`should return the first place from 10 when score is 10`, () => {
    assert.equal(`Вы заняли 1 место из 10 игроков. Это лучше, чем у 90% игроков`, getResult(results, mokeResult(10, 1, 10000)));
  });

  it(`should return the 3 place from 10 when score is 7`, () => {
    assert.equal(`Вы заняли 3 место из 10 игроков. Это лучше, чем у 70% игроков`, getResult(results, mokeResult(7, 1, 10000)));
  });
});
