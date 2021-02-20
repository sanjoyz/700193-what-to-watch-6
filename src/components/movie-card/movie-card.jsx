import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from '../videoplayer/video-player';

const MovieCard = (props) => {

  const {name, previewImage, posterImage, videoLink, id} = props;
  const [focusedCard, setFocused] = useState(null);
  useEffect(() => {
    // тут какой то код, но какой если итак работает
  }, [id]);

  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          setFocused(id);
        }}
        onMouseLeave={() => {
          setFocused(null);
        }}
      >
        {focusedCard !== null
          ? <VideoPlayer posterImage={posterImage} videoLink={videoLink} width={280} height={175}/>
          : <div className="small-movie-card__image">
            <img src={previewImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width={280} height={175}/>
          </div>
        }
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
  id: PropTypes.number.isRequired,
  posterImage: PropTypes.string,
  videoLink: PropTypes.string,
};
export default MovieCard;
