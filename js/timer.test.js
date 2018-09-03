import {assert} from 'chai';
import {INITIAL_STATE} from "./data/game-data";
import {getStringTime, reduceLeftTime, changeLeftTime} from './timer';

describe(`Check getStringTime()`, () => {
  it(`should return 05:00 when 300000 milliseconds`, () => {
    assert.equal(`05:00`, getStringTime(300000));
  });

  it(`should return 05:25 when 325000 milliseconds`, () => {
    assert.equal(`05:25`, getStringTime(325000));
  });

  it(`should return 00:00 when 0 milliseconds`, () => {
    assert.equal(`00:00`, getStringTime(0));
  });

  it(`should return 02:46 when 165912 milliseconds`, () => {
    assert.equal(`02:46`, getStringTime(165912));
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => getStringTime(-1), /Time should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => getStringTime([]), /Time should be of type number/);
  });
});

describe(`Check time reducer`, () => {
  it(`should return 299999 when state.leftTime 300000 is reducing on 1 millisecond`, () => {
    assert.equal(reduceLeftTime(INITIAL_STATE, 1).leftTime, 299999);
  });

  it(`should return 299500 when state.leftTime 300000 is reducing on 500 milliseconds`, () => {
    assert.equal(reduceLeftTime(INITIAL_STATE, 500).leftTime, 299500);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => reduceLeftTime(INITIAL_STATE, -1).leftTime, /Milliseconds should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => reduceLeftTime(INITIAL_STATE, []).leftTime, /Milliseconds should be of type number/);
  });
});

describe(`Check leftTime changer`, () => {
  it(`should update leftTime`, () => {
    assert.equal(changeLeftTime(INITIAL_STATE, 180000).leftTime, 180000);
    assert.equal(changeLeftTime(INITIAL_STATE, 0).leftTime, 0);
    assert.equal(changeLeftTime(INITIAL_STATE, 240000).leftTime, 240000);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => changeLeftTime(INITIAL_STATE, -1).leftTime, /LeftTime should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => changeLeftTime(INITIAL_STATE, []).leftTime, /LeftTime should be of type number/);
  });
});


