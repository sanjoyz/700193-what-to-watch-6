
import React from 'react';
import PropTypes from 'prop-types';
import {getTimeFromMins} from '../../const';


const Details = (props) => {
  const {film} = props;
  return (
    <React.Fragment>
      <div className="movie-card__text movie-card__row">

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Director</strong>
            <span className="movie-card__details-value">{film.director}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Starring</strong>
            <span className="movie-card__details-value">
              {film.starring.map((star) => {
                return (
                  <React.Fragment key={star}>
                    {star}<br/>
                  </React.Fragment>
                );
              })}
            </span>
          </p>
        </div>

        <div className="movie-card__text-col">
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Run Time</strong>
            <span className="movie-card__details-value">{getTimeFromMins(film.run_time)}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Genre</strong>
            <span className="movie-card__details-value">{film.genre}</span>
          </p>
          <p className="movie-card__details-item">
            <strong className="movie-card__details-name">Released</strong>
            <span className="movie-card__details-value">{film.released}</span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
Details.propTypes = {
  film: PropTypes.object
};

export default Details;

