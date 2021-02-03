import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
const Setting = {
  MOVIE_CARD_DEFAULT_COUNT: 20
};

ReactDOM.render(
    <App
      movieCardsCount={Setting.MOVIE_CARD_DEFAULT_COUNT}
    />, document.querySelector(`#root`)

);
