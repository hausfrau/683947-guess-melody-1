import {assert} from 'chai';
import {INITIAL_STATE, changeScreenLevel, changeLeftNotes, reduceLeftNotes} from './game-data';

describe(`Check screen level changer`, () => {
  it(`should update screen level of the game`, () => {
    assert.equal(changeScreenLevel(INITIAL_STATE, 1).screen, 1);
    assert.equal(changeScreenLevel(INITIAL_STATE, 2).screen, 2);
    assert.equal(changeScreenLevel(INITIAL_STATE, 10).screen, 10);
    assert.equal(changeScreenLevel(INITIAL_STATE, 102).screen, 102);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => changeScreenLevel(INITIAL_STATE, -1).screen, /Screen level should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => changeScreenLevel(INITIAL_STATE, []).screen, /Screen level should be of type number/);
  });
});


describe(`Check notes count reducer`, () => {
  it(`should return 2 when state.leftNotes 3 reduce on 1`, () => {
    assert.equal(reduceLeftNotes(INITIAL_STATE, 1).leftNotes, 2);
  });

  it(`should return 1 when state.leftNotes 3 reduce on 2`, () => {
    assert.equal(reduceLeftNotes(INITIAL_STATE, 2).leftNotes, 1);
  });

  it(`should return 0 when state.leftNotes 3 reduce on 3`, () => {
    assert.equal(reduceLeftNotes(INITIAL_STATE, 3).leftNotes, 0);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => reduceLeftNotes(INITIAL_STATE, -1).leftNotes, /Notes should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => reduceLeftNotes(INITIAL_STATE, []).leftNotes, /Notes should be of type number/);
  });
});

describe(`Check notes count changer`, () => {
  it(`should update notes count`, () => {
    assert.equal(changeLeftNotes(INITIAL_STATE, 3).leftNotes, 3);
    assert.equal(changeLeftNotes(INITIAL_STATE, 2).leftNotes, 2);
    assert.equal(changeLeftNotes(INITIAL_STATE, 1).leftNotes, 1);
  });

  it(`should not allow set negative values`, () => {
    assert.throws(() => changeLeftNotes(INITIAL_STATE, -1).leftNotes, /Notes should not be negative value/);
  });

  it(`should not allow set non number value`, () => {
    assert.throws(() => changeLeftNotes(INITIAL_STATE, []).leftNotes, /Notes should be of type number/);
  });
});
