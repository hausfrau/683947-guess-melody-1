const failContent = (data) => `
  <section class="result">
    <div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
    <h2 class="result__title">${data.content.title}</h2>
    <p class="result__total result__total--fail">${data.content.total}</p>
    <button class="result__replay" type="button">Попробовать ещё раз</button>
  </section>`;

export default failContent;
