export const SETTINGS = {
  questionsCount: 10,
  mistakesCount: 3,
  totalTime: 300000, // 5 min in ms
  fastTime: 30000 // 30 sec in ms
};

export const ANSWER_RESULT = {
  CORRECT: 1,
  FAST: 2,
  WRONG: -2
};

export const INITIAL_STATE = Object.freeze({
  screen: 0,
  leftTime: SETTINGS.totalTime,
  leftNotes: SETTINGS.mistakesCount,
  answers: []
});
