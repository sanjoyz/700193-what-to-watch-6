import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import {connect} from 'react-redux';
import ShowMore from '../show-more/show-more';
import {SHOW_FILMS_STEP} from '../../const';

const FilmList = (props) => {
  const {films} = props;
  const [shownFilms, setShownFilms] = useState(SHOW_FILMS_STEP);
  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {films.map((film, index) => {
          return index < shownFilms ?
            <MovieCard
              key={film.id}
              previewImage={film.preview_image}
              name={film.name}
              id={film.id}
              posterImage={film.poster_image}
              videoLink={film.video_link}
            />
            : ``;
        })}
      </div>
      <ShowMore films={films} showMoreHanlder={() => setShownFilms((prevValue) => prevValue + SHOW_FILMS_STEP)} filmsShown={shownFilms}/>

    </React.Fragment>
  );
};

FilmList.propTypes = {
  films: PropTypes.array,
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films
});

export {FilmList};
export default React.memo(connect(mapStateToProps, null)(FilmList));

