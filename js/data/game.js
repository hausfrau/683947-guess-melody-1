export const SETTINGS = {
  questionsCount: 10,
  mistakesCount: 3,
  totalTime: 300000, // 5 min in ms
  fastTime: 30000 // 30 sec in ms
};

const GAME_TYPE = {
  welcome: 0,
  artist: 1,
  genre: 2,
  failTries: 3,
  failTime: 4
};

export const INITIAL_STATE = Object.freeze({
  screen: 0,
  leftTime: SETTINGS.totalTime,
  leftNotes: SETTINGS.mistakesCount,
  gameType: GAME_TYPE.welcome,
  questions: [
    {
      text: ``,
      answers: []
    }
  ],
  answers: [
    {
      correct: false,
      answerLink: {}
    }
  ],
  statistics: []
});

export let state = {};

export const changeScreenLevel = (_state, screen) => {
  if (typeof screen !== `number`) {
    throw new Error(`Screen level should be of type number`);
  }

  if (screen < 0) {
    throw new Error(`Screen level should not be negative value`);
  }

  const currentState = Object.assign({}, _state, {
    screen
  });
  return currentState;
};

export const reduceLeftNotes = (_state, notes) => {
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

export const changeLeftNotes = (_state, leftNotes) => {
  if (typeof leftNotes !== `number`) {
    throw new Error(`Notes should be of type number`);
  }

  if (leftNotes < 0) {
    throw new Error(`Notes should not be negative value`);
  }

  const currentState = Object.assign({}, _state, {
    leftNotes
  });
  return currentState;
};


