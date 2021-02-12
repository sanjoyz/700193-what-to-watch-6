import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';

const FilmList = (props) => {
  const [activeFilmId, setActive] = React.useState(0);
  const {films} = props;
  return (
    <React.Fragment>
      {films.map((film) => {
        return <MovieCard key = {film.id} previewImage={film.preview_image} onClick={console.log('click1')} name ={film.name}/>;
      })}
    </React.Fragment>
  );
};

FilmList.PropTypes = {
  films: PropTypes.array,
};

export default FilmList;
