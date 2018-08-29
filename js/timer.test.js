import {assert} from 'chai';
import {getStringTime} from './timer';

describe(`check timer`, () => {
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
});
