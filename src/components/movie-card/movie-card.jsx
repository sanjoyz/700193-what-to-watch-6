import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from '../videoplayer/video-player';
import {AppRoute} from '../../const';


const MovieCard = (props) => {

  const {name, previewImage, posterImage, videoLink, id} = props;
  const [focusedCard, setFocused] = useState(null);

  const onHoverHanlder = React.useCallback((i) => {
    setFocused(i);
  }, [focusedCard]);

  let timer;
  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          timer = setTimeout(() => {
            onHoverHanlder(id);
          }, 1000);

        }}
        onMouseLeave={() => {
          onHoverHanlder(null);
          clearTimeout(timer);
        }}
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
