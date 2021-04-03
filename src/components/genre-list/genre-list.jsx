import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {useDispatch} from 'react-redux';
import {GENRE_LIST_MAX_AMOUNT} from '../../const';


const GenreList = (props) => {
  const {films} = props;
  const genresSet = new Set();
  films.forEach((film) => {
    genresSet.add(film.genre);

  });
  const genresArr = Array.from(genresSet);
  const [checkedGenre, setCheckedGenre] = useState(`All genres`);
  const dispatch = useDispatch();
  const onGenreChange = (evt) => {
    evt.preventDefault();
    setCheckedGenre(evt.target.innerText);
    dispatch(ActionCreator.filterFilms(evt));
  };

  return (
    <React.Fragment>
      <ul className="catalog__genres-list">
        <li className={`catalog__genres-item ${checkedGenre === `All genres` ? `catalog__genres-item--active` : ``}`}>
          <a href="#" onClick={onGenreChange} className="catalog__genres-link">All genres</a>
        </li>
        {genresArr.map((genre, index) => {
          return (
            index < GENRE_LIST_MAX_AMOUNT ?
              <li key={genre + Math.random()} className={`catalog__genres-item ${checkedGenre === genre ? `catalog__genres-item--active` : ``}`}>
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
  films: PropTypes.array.isRequired,
};

export default GenreList;

