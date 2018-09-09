export const getMinutesFromMilliseconds = (milliseconds) => {
  return Math.floor(milliseconds / 1000 / 60) % 60;
};

export const getMinutes = (milliseconds) => {
  const secs = milliseconds / 1000;
  let minutes = Math.floor(secs / 60) % 60;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return minutes;
};

export const getSeconds = (milliseconds) => {
  const secs = milliseconds / 1000;
  let seconds = Math.round(secs % 60);
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return seconds;
};

export const getStringTime = (milliseconds) => {
  if (typeof milliseconds !== `number`) {
    throw new Error(`Time should be of type number`);
  }

  if (milliseconds < 0) {
    throw new Error(`Time should not be negative value`);
  }

  return `${getMinutes(milliseconds)}:${getSeconds(milliseconds)}`;
};

export const reduceLeftTime = (state, milliseconds) => {
  if (typeof milliseconds !== `number`) {
    throw new Error(`Milliseconds should be of type number`);
  }

  if (milliseconds < 0) {
    throw new Error(`Milliseconds should not be negative value`);
  }

  let leftTime = state.leftTime - milliseconds;

  const currentState = Object.assign({}, state, {
    leftTime
  });
  return currentState;
};

export const changeLeftTime = (state, leftTime) => {
  if (typeof leftTime !== `number`) {
    throw new Error(`LeftTime should be of type number`);
  }

  if (leftTime < 0) {
    throw new Error(`LeftTime should not be negative value`);
  }

  const currentState = Object.assign({}, state, {
    leftTime
  });
  return currentState;
};
