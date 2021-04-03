import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Link, useParams} from 'react-router-dom';
import {AppRoute} from '../../const';


const Player = (props) => {
  const {id} = useParams();
  const [...filmsArray] = props.films;
  const film = filmsArray.filter((f) => (f.id === parseInt(id, 10)))[0];
  const videoLink = film.video_link;
  const poster = film.background_image;
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const player = document.querySelector(`.player__video`);
    const playButton = document.querySelector(`.player__play`);
    const fullScreenButton = document.querySelector(`.player__full-screen`);
    const progressTime = document.querySelector(`.player__time-value`);
    const progress = document.querySelector(`.player__progress`);
    const progressToggler = document.querySelector(`.player__toggler`);
    const togglePlayback = (p) => p.paused ? p.play() : p.pause();
    const progressUpdate = () => {
      progressTime.textContent = new Date((player.duration - player.currentTime) * 1000).toISOString().substr(11, 8);
    };
    player.addEventListener(`timeupdate`, () => {
      progress.value = (100 * player.currentTime / player.duration);
      progressToggler.style.left = (100 * player.currentTime / player.duration) + `%`;
      progressUpdate();
    });
    playButton.addEventListener(`click`, () => {
      togglePlayback(player);
      setIsPlaying((prevState) => !prevState);
    });
    fullScreenButton.addEventListener(`click`, () => player.requestFullscreen());
  }, []);

  return (
    <React.Fragment>
      <div className="player">
        <video src={videoLink} className="player__video" poster={poster}/>
        <Link to= {
          {
            pathname: `${AppRoute.FILMS}/${id}`
          }
        }>
          <button type="button" className="player__exit">Exit</button>
        </Link>
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value="0" max="100" />
              <div className="player__toggler" style={{left: `0%`}}>Toggler</div>
            </div>
            <div className="player__time-value">1:30:29</div>
          </div>
          <div className="player__controls-row">
            <button type="button" className="player__play">
              {isPlaying ?
                <svg viewBox="0 0 14 21" width={14} height={21}>
                  <use xlinkHref="#pause"></use>
                </svg>
                : <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
              }
              <span>Play</span>
            </button>
            <div className="player__name">Transpotting</div>
            <button type="button" className="player__full-screen">
              <svg viewBox="0 0 27 27" width={27} height={27}>
                <use xlinkHref="#full-screen" />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>

      </div>

    </React.Fragment>
  );
};

Player.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Player;

