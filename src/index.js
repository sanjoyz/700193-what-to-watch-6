import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from './mocks/films.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

const Setting = {
  MOVIE_CARD_DEFAULT_COUNT: 20,
  PROMO_FILM_NAME: `The Grand Budapest`,
  PROMO_FILM_GENRE: `Drama`,
  PROMO_FILM_RELISE_YEAR: `2020`
};

ReactDOM.render(
    <Provider store={store}>
      <App
        movieCardsCount={Setting.MOVIE_CARD_DEFAULT_COUNT}
        promoFilmName={Setting.PROMO_FILM_NAME}
        promoFilmGenre={Setting.PROMO_FILM_GENRE}
        promoFilmReliseYear={Setting.PROMO_FILM_RELISE_YEAR}
        films = {films}
      />
    </Provider>,
    document.querySelector(`#root`)

);
