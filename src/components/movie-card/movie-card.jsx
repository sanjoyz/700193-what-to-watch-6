import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const MovieCard = (props) => {
  const {name, onHover, previewImage, id} = props;

  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card" onMouseEnter={onHover(id)}>
        <div className="small-movie-card__image">
          <img src={previewImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width={280} height={175}/>
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to={
            {
              pathname: `/films/:` + id,
              // search: `:id` + id
            }
          }>
            {name}
          </Link>
        </h3>
      </article>
    </React.Fragment>
  );
};
MovieCard.propTypes = {
  previewImage: PropTypes.string,
  name: PropTypes.string,
  onHover: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};
export default MovieCard;
