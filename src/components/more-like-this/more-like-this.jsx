import React from 'react';
import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';
import {getSimilarFilms} from '../../const';


const MoreLikeThis = (props) => {
  const {films, film} = props;
  const genre = film.genre;

  return (
    <React.Fragment>
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>
        <div className="catalog__movies-list">
          {getSimilarFilms(films, genre).map((item, index) => {
            return index < 4 ?
              <MovieCard
                key={item.id}
                previewImage={item.preview_image}
                name={item.name}
                id={item.id}
                posterImage={item.poster_image}
                videoLink={item.video_link}
              />
              : ``;
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

MoreLikeThis.propTypes = {
  film: PropTypes.object,
  films: PropTypes.array,
};

export default MoreLikeThis;

