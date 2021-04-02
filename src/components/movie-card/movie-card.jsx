import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from '../videoplayer/video-player';
import {useDispatch} from 'react-redux';
import {fetchFilmsList} from '../../store/api-actions';
import {AppRoute} from '../../const';

const MovieCard = (props) => {

  const {name, previewImage, posterImage, videoLink, id} = props;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!id) {
      dispatch(fetchFilmsList());
    }
  }, [id]);
  const [focusedCard, setFocused] = useState(null);
  let timer;
  return (
    <React.Fragment>

      <article className="small-movie-card catalog__movies-card"
        onMouseOver={() => {
          timer = setTimeout(() => {
            setFocused(id);
          }, 1000);

        }}
        onMouseLeave={() => {
          setFocused(null);
          clearTimeout(timer);
        }}
      > <Link className="small-movie-card__link" to={{pathname: `${AppRoute.FILMS}/${id}`}}>
          <div className="small-movie-card__image">
            {focusedCard !== null
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
  previewImage: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
  posterImage: PropTypes.string,
  videoLink: PropTypes.string,
};
export default MovieCard;
