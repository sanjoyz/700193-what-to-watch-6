import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
const Setting = {
  MOVIE_CARD_DEFAULT_COUNT: 20,
  PROMO_FILM_NAME: `The Grand Budapest`,
  PROMO_FILM_GENRE: `Drama`,
  PROMO_FILM_RELISE_YEAR: `2020`
};

ReactDOM.render(
    <App
      movieCardsCount={Setting.MOVIE_CARD_DEFAULT_COUNT}
      promoFilmName={Setting.PROMO_FILM_NAME}
      promoFilmGenre={Setting.PROMO_FILM_GENRE}
      promoFilmReliseYear={Setting.PROMO_FILM_RELISE_YEAR}
    />, document.querySelector(`#root`)

);
