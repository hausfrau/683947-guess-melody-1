export const getTime = (millisecs) => {
  const secs = millisecs / 1000;
  let minutes = Math.floor(secs / 60) % 60;
  let seconds = Math.round(secs % 60);
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${seconds}`;
};
