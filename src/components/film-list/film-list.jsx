import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';


const FilmList = (props) => {
  const state = React.useState();
  const {film} = props;
  const [name, preview_image] = film;

  return (
    <React.Fragment>
      <MovieCard previewImage={preview_image} name ={name}/>
    </React.Fragment>
  );
};

FilmList.PropTypes = {
  movieCardsCount: PropTypes.number
};

export default FilmList;
