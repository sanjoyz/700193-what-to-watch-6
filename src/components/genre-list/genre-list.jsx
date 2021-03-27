import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';

const GenreList = (props) => {
  const {films, onGenreChange} = props;
  const genresSet = new Set();
  films.forEach((film) => {
    genresSet.add(film.genre);

  });
  const genresArr = Array.from(genresSet);

  return (
    <React.Fragment>
      <ul className="catalog__genres-list">
        <li className="catalog__genres-item catalog__genres-item--active">
          <a href="#" onClick={onGenreChange} className="catalog__genres-link">All genres</a>
        </li>
        {genresArr.map((genre, index) => {
          return (
            index < 9 ?
              <li key={genre + Math.random()} className="catalog__genres-item">
                <a href="#" onClick={onGenreChange} className="catalog__genres-link">{genre}</a>
              </li>
              : ``
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

const mapStateToProps = ({DATA}) => ({
  films: DATA.films
});

const mapDispatchToProps = (dispatch) => ({
  onGenreChange(genre) {
    dispatch(ActionCreator.filterFilms(genre));
  }
});

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);


