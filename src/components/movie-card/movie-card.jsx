import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import VideoPlayer from '../videoplayer/video-player';

const MovieCard = (props) => {

  const {name, onHover, previewImage, posterImage, videoLink, id, onFocus, onBlur} = props;
  // когда мы навели курсор и подержали 1 секунду то появляется компонент видеоплеер
  // если мы этого не делали то висит просто div
  // через useEffect рендерить VideoPlayer и удалять, передавая функциюы
  // вторым параметром в useEffect передать id фильма на который навелся? Тем самым задастся условие для компонент апдейт
  const [focusedCard, setFocused] = useState(0);
  const isFocused = true;
  useEffect(() => {
    console.log(`Hello from useEffect`);
  });

  /*
  {isFocused ? <VideoPlayer posterImage={posterImage} videoLink={videoLink} height={175} width={280}/>
          :
          <div className="small-movie-card__image">
            <img src={previewImage} alt="Fantastic Beasts: The Crimes of Grindelwald" width={280} height={175}/>
          </div>
        }

      onMouseOver={() => setVideoPlaying((prevState) => !prevState)}>
  */

  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card" onMouseEnter={onHover(id)}
        onMouseOver={() => {
          console.log(`focused card:` + focusedCard);
          setFocused(id);
        }}>
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
  id: PropTypes.number.isRequired,
  posterImage: PropTypes.string,
  videoLink: PropTypes.string,
};
export default MovieCard;
