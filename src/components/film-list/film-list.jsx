import React from 'react';
import PropTypes from 'prop-types';
import Film from '../film/film';

const FilmList = (props) => {
  const {movieCardsCount} = props;
  let movieCardsArr = Array(movieCardsCount).fill(1, 0);

  return (
    <React.Fragment>
      {movieCardsArr.map((name, i) => <Film key={1 + i}/>)}
    </React.Fragment>
  );
};

FilmList.PropTypes = {
  movieCardsCount: PropTypes.number
};

export default FilmList;
