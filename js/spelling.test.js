import {assert} from 'chai';
import {declensionMinutes, declensionSeconds, declensionMistakes} from './spelling';

describe(`Check spelling of seconds`, () => {
  it(`should return correct ending of word seconds`, () => {
    assert.equal(declensionSeconds(0), `секунд`);
    assert.equal(declensionSeconds(1), `секунду`);
    assert.equal(declensionSeconds(2), `секунды`);
    assert.equal(declensionSeconds(3), `секунды`);
    assert.equal(declensionSeconds(4), `секунды`);
    assert.equal(declensionSeconds(5), `секунд`);
    assert.equal(declensionSeconds(6), `секунд`);
    assert.equal(declensionSeconds(7), `секунд`);
    assert.equal(declensionSeconds(8), `секунд`);
    assert.equal(declensionSeconds(9), `секунд`);
    assert.equal(declensionSeconds(10), `секунд`);
    assert.equal(declensionSeconds(11), `секунд`);
    assert.equal(declensionSeconds(12), `секунд`);
    assert.equal(declensionSeconds(13), `секунд`);
    assert.equal(declensionSeconds(14), `секунд`);
    assert.equal(declensionSeconds(54), `секунды`);
    assert.equal(declensionSeconds(371), `секунду`);
    assert.equal(declensionSeconds(955), `секунд`);
  });
});

describe(`Check spelling of minutes`, () => {
  it(`should return correct ending of word minutes`, () => {
    assert.equal(declensionMinutes(0), `минут`);
    assert.equal(declensionMinutes(1), `минуту`);
    assert.equal(declensionMinutes(2), `минуты`);
    assert.equal(declensionMinutes(3), `минуты`);
    assert.equal(declensionMinutes(4), `минуты`);
    assert.equal(declensionMinutes(5), `минут`);
    assert.equal(declensionMinutes(6), `минут`);
    assert.equal(declensionMinutes(7), `минут`);
    assert.equal(declensionMinutes(8), `минут`);
    assert.equal(declensionMinutes(9), `минут`);
    assert.equal(declensionMinutes(10), `минут`);
    assert.equal(declensionMinutes(11), `минут`);
    assert.equal(declensionMinutes(12), `минут`);
    assert.equal(declensionMinutes(13), `минут`);
    assert.equal(declensionMinutes(14), `минут`);
    assert.equal(declensionMinutes(54), `минуты`);
    assert.equal(declensionMinutes(371), `минуту`);
    assert.equal(declensionMinutes(955), `минут`);
  });
});

describe(`Check spelling of mistakes`, () => {
  it(`should return correct ending of word mistakes`, () => {
    assert.equal(declensionMistakes(0), `ошибок`);
    assert.equal(declensionMistakes(1), `ошибку`);
    assert.equal(declensionMistakes(2), `ошибки`);
    assert.equal(declensionMistakes(3), `ошибки`);
    assert.equal(declensionMistakes(4), `ошибки`);
    assert.equal(declensionMistakes(5), `ошибок`);
    assert.equal(declensionMistakes(6), `ошибок`);
    assert.equal(declensionMistakes(7), `ошибок`);
    assert.equal(declensionMistakes(8), `ошибок`);
    assert.equal(declensionMistakes(9), `ошибок`);
    assert.equal(declensionMistakes(10), `ошибок`);
    assert.equal(declensionMistakes(11), `ошибок`);
    assert.equal(declensionMistakes(12), `ошибок`);
    assert.equal(declensionMistakes(13), `ошибок`);
    assert.equal(declensionMistakes(14), `ошибок`);
    assert.equal(declensionMistakes(54), `ошибки`);
    assert.equal(declensionMistakes(71), `ошибку`);
    assert.equal(declensionMistakes(99), `ошибок`);
  });
});
