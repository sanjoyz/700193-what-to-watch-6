import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';

const FilmList = (props) => {
  const [activeFilmId, setActive] = React.useState(0);
  const {films} = props;
  function onHover(id) {
    setActive(id);
  }
  return (
    <React.Fragment>
      {films.map((film) => {
        return <MovieCard
          key={film.id}
          previewImage={film.preview_image}
          name={film.name}
          id={film.id}
          onHover = {onHover}
        />;
      })}
    </React.Fragment>
  );
};

FilmList.propTypes = {
  films: PropTypes.array,
};

export default FilmList;

