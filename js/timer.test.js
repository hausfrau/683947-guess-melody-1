import {assert} from 'chai';
import {getTime} from './timer';

describe(`check timer`, () => {
  it(`should return 05:00 when 300000 milliseconds`, () => {
    assert.equal(`05:00`, getTime(300000));
  });

  it(`should return 05:25 when 325000 milliseconds`, () => {
    assert.equal(`05:25`, getTime(325000));
  });

  it(`should return 00:00 when 0 milliseconds`, () => {
    assert.equal(`00:00`, getTime(0));
  });

  it(`should return 02:46 when 165912 milliseconds`, () => {
    assert.equal(`02:46`, getTime(165912));
  });
});
