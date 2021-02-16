import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const name = props.name;
  const previewImage = props.previewImage;
  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={previewImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width={280} height={175}/>
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{name}</a>
        </h3>
      </article>
    </React.Fragment>
  );
};
MovieCard.propTypes = {
  previewImage: PropTypes.string,
  name: PropTypes.string
};
export default MovieCard;
