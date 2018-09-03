export const SETTINGS = {
  questionsCount: 10,
  mistakesCount: 3,
  totalTime: 300000, // 5 min in ms
  fastTime: 30000 // 30 sec in ms
};

export const INITIAL_STATE = Object.freeze({
  screen: 0,
  leftTime: SETTINGS.totalTime,
  leftNotes: SETTINGS.mistakesCount,
  answers: []
});

export const changeScreenLevel = (state, screen) => {
  if (typeof screen !== `number`) {
    throw new Error(`Screen level should be of type number`);
  }

  if (screen < 0) {
    throw new Error(`Screen level should not be negative value`);
  }

  const currentState = Object.assign({}, state, {
    screen
  });
  return currentState;
};

export const reduceLeftNotes = (state, notes) => {
  if (typeof notes !== `number`) {
    throw new Error(`Notes should be of type number`);
  }

  if (notes < 0) {
    throw new Error(`Notes should not be negative value`);
  }

  let leftNotes = state.leftNotes - notes;

  const currentState = Object.assign({}, state, {
    leftNotes
  });
  return currentState;
};

export const changeLeftNotes = (state, leftNotes) => {
  if (typeof leftNotes !== `number`) {
    throw new Error(`Notes should be of type number`);
  }

  if (leftNotes < 0) {
    throw new Error(`Notes should not be negative value`);
  }

  const currentState = Object.assign({}, state, {
    leftNotes
  });
  return currentState;
};
