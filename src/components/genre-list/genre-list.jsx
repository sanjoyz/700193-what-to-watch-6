import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';

const GenreList = (props) => {
  const {films, onGenreChange} = props;
  const genres = [];
  films.forEach((film) => {
    genres.push(film.genre);
  });

  return (
    <React.Fragment>
      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" onClick={onGenreChange} className="catalog__genres-link">All genres</a>
        </li>
        {genres.map((genre) => {
          return (
            <li key={genre + Math.random()} className="catalog__genres-item">
              <a href="#" onClick={onGenreChange} className="catalog__genres-link">{genre}</a>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

GenreList.propTypes = {
  films: PropTypes.array,
  onGenreChange: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(ActionCreator.getFilmList(genre));
  }
});

export {GenreList};
export default connect(null, mapDispatchToProps)(GenreList);


