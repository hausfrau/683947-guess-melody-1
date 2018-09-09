let loaded = false;
let played = false;

export const _loadAudio = (link) => {
  loaded = false;
  played = false;
  const audio = new Audio();

  audio.addEventListener(`loadeddata`, () => {
    loaded = true;
    audio.play();
  });

  audio.addEventListener(`onended`, () => {
    played = true;
  });

  audio.src = link;
  audio.load();
};

export const _isLoaded = () => loaded;
export const _isPlayed = () => played;
