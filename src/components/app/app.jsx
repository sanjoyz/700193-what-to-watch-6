import React from 'react';
import MainScreen from '../main/main-screen';
import PropTypes from 'prop-types';

const App = (props) => {
  const {movieCardsCount} = props;
  return (
    <MainScreen movieCardsCount={movieCardsCount}
      promoFilmName={props.promoFilmName}
      promoFilmGenre={props.promoFilmGenre}
      promoFilmReliseYear={props.promoFilmReliseYear}
    />
  );
};
App.propTypes = {
  movieCardsCount: PropTypes.number.isRequired,
  promoFilmName: PropTypes.string.isRequired,
  promoFilmGenre: PropTypes.string.isRequired,
  promoFilmReliseYear: PropTypes.number.isRequired
};

export default App;
