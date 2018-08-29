const _getMinutes = (secs) => {
  let minutes = Math.floor(secs / 60) % 60;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return minutes;
};

const _getSeconds = (secs) => {
  let seconds = Math.round(secs % 60);
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return seconds;
};

export const getStringTime = (millisecs) => {
  const secs = millisecs / 1000;
  return `${_getMinutes(secs)}:${_getSeconds(secs)}`;
};
