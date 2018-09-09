const main = document.querySelector(`.main`);

export const renderScreen = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

export const changeScreen = (screen) => {
  main.innerHTML = ``;
  main.appendChild(screen);
};

export const _getOneOfThreeRandomInt = () => Math.round(Math.random() * 2);

