import React, {useCallback, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from '../videoplayer/video-player';
import {AppRoute} from '../../const';


const MovieCard = (props) => {

  const {name, previewImage, posterImage, videoLink, id} = props;

  const [focusedCard, setfocusedCard] = useState(null);
  const [nextFilmId, setNextFilmId] = useState(null);


  const handleActiveFilmChange = useCallback((i) => {
    setNextFilmId(i);
    if (i === null) {
      setfocusedCard(i);
    }
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setfocusedCard(nextFilmId);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [nextFilmId]);

  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card"
        onMouseEnter={() => handleActiveFilmChange(id)}
        onMouseLeave={() => handleActiveFilmChange(null)}
      > <Link className="small-movie-card__link" to={{pathname: `${AppRoute.FILMS}/${id}`}}>
          <div className="small-movie-card__image">
            {id === focusedCard
              ? <VideoPlayer posterImage={posterImage} videoLink={videoLink} width={280} height={175}/>
              : <img src={previewImage} alt={name} width={280} height={175}/>
            }
          </div>
          <h3 className="small-movie-card__title">{name}</h3>
        </Link>
      </article>
    </React.Fragment>
  );
};
MovieCard.propTypes = {
  previewImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  posterImage: PropTypes.string.isRequired,
  videoLink: PropTypes.string.isRequired,
};
export default MovieCard;
