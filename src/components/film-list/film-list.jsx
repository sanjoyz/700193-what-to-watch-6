import React, {useState} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import {connect} from 'react-redux';
import ShowMore from '../show-more/show-more';
import {SHOW_FILMS_STEP} from '../../const';

const FilmList = (props) => {
  const {films, filteredFilms} = props;
  const [shownFilms, setShownFilms] = useState(SHOW_FILMS_STEP);
  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {filteredFilms.length > 0 ?
          filteredFilms.map((film, index) => {
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
          }) : films.map((film, index) => {
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
          })
        }
      </div>
      <ShowMore films={filteredFilms.length > 0 ? filteredFilms : films} showMoreHanlder={() => setShownFilms((prevValue) => prevValue + SHOW_FILMS_STEP)} filmsShown={shownFilms}/>

    </React.Fragment>
  );
};

FilmList.propTypes = {
  films: PropTypes.array,
  filteredFilms: PropTypes.array,
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films,
  filteredFilms: DATA.filteredFilms
});

export {FilmList};
export default React.memo(connect(mapStateToProps, null)(FilmList));

