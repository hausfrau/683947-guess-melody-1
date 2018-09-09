const GAME = {
  'screen-0': {
    gameType: 0
  },
  'screen-1': {
    gameType: 1,
    title: `Кто исполняет эту песню?`,
    questions: [
      {
        picture: `http://placehold.it/134x134`,
        name: `Пелагея`,
        isCorrect: true,
      },
      {
        picture: `http://placehold.it/134x134`,
        name: `Краснознаменная дивизия имени моей бабушки`,
        isCorrect: false,
      },
      {
        picture: `http://placehold.it/134x134`,
        name: `Lorde`,
        isCorrect: false,
      }
    ]
  },
  'screen-2': {
    gameType: 2,
    title: `Выберите инди-рок треки`,
    questions: [
      {
        track: {
          artist: `Kevin MacLeod`,
          name: `Long Stroll`,
          image: `https://yt3.ggpht.com/-fkDeGauT7Co/AAAAAAAAAAI/AAAAAAAAAAA/dkF5ZKkrxRo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=91624fdc22fc54ed`,
          genre: `Jazz`
        },
        isCorrect: true
      },
      {
        track: {
          artist: `Jingle Punks`,
          name: `In the Land of Rhinoplasty`,
          image: `https://i.vimeocdn.com/portrait/992615_300x300`,
          src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
          genre: `Rock`
        },
        isCorrect: false
      },
      {
        track: {
          artist: `Audionautix`,
          name: `Travel Light`,
          image: `http://4.bp.blogspot.com/-kft9qu5ET6U/VPFUBi9W-MI/AAAAAAAACYM/UxXilXKYwOc/s1600/audionautix%2BHalf%2BSize.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
          genre: `Country`
        },
        isCorrect: false
      },
      {
        track: {
          artist: `Riot`,
          name: `	Level Plane`,
          image: `https://i.ytimg.com/vi/jzgM3m8Vp1k/maxresdefault.jpg`,
          src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
          genre: `R&B`
        },
        isCorrect: false
      }
    ]
  },
  'screen-3': {
    gameType: 3,
    content: {
      title: `Какая жалость!`,
      total: `У вас закончились все попытки. Ничего, повезёт в следующий раз!`
    }
  },
  'screen-4': {
    gameType: 4,
    content: {
      title: `Увы и ах!`,
      total: `Время вышло! Вы не успели отгадать все мелодии`
    }
  },
  'screen-5': {}
};

// const getScreenData = (state) => GAME[`screen-${state.screen}`];

export default GAME;
