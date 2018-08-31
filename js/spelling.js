const _declensionString = (time, lineStart, ENDINGS, defaultLine) => {
  let line = lineStart;

  switch (true) {
    case time !== 11 && time.toString().endsWith(`1`):
      line = `${line}${ENDINGS[1]}`;
      break;

    case time !== 12 && time.toString().endsWith(`2`):
    case time !== 13 && time.toString().endsWith(`3`):
    case time !== 14 && time.toString().endsWith(`4`):
      line = `${line}${ENDINGS[2]}`;
      break;

    default:
      line = defaultLine;
      break;
  }

  return line;
};

export const declensionSeconds = (seconds) => {
  return _declensionString(seconds, `секунд`, {
    1: `у`,
    2: `ы`
  }, `секунд`);
};

export const declensionMinutes = (minutes) => {
  return _declensionString(minutes, `минут`, {
    1: `у`,
    2: `ы`
  }, `минут`);
};

export const declensionMistakes = (mistakes) => {
  return _declensionString(mistakes, `ошиб`, {
    1: `ку`,
    2: `ки`
  }, `ошибок`);
};
