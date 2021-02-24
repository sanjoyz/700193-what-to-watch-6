import React from 'react';
import PropTypes from 'prop-types';
const GenreList = (props) => {
  const {films} = props;
  const genres = [];
  films.forEach((film) => {
    genres.push(film.genre);
  });

  return (
    <React.Fragment>
      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" className="catalog__genres-link">All genres</a>
        </li>
        {genres.map((genre) => {
          return (
            <li key={genre} className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">{genre}</a>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

GenreList.propTypes = {
  films: PropTypes.array,
};

export default GenreList;

