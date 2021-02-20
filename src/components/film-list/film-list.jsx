import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';

const FilmList = (props) => {
  const {films} = props;
  return (
    <React.Fragment>
      {films.map((film) => {
        return <MovieCard
          key={film.id}
          previewImage={film.preview_image}
          name={film.name}
          id={film.id}
          posterImage={film.poster_image}
          videoLink={film.video_link}
        />;
      })}
    </React.Fragment>
  );
};

FilmList.propTypes = {
  films: PropTypes.array,
};

export default FilmList;

