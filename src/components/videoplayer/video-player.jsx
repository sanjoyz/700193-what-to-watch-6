import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = (props) => {
  const isMuted = true;
  const {videoLink, posterImage, height, width} = props;

  /*
  {isMuted === true
        ? <video width={width} height={height} src={videoLink} className="player__video" poster={posterImage} muted></video>
        : <video width={width} height={height} src={videoLink} className="player__video" poster={posterImage}></video>
      }
  */
  return (
    <React.ReactFragment>
      <video width={width} height={height} src={videoLink} className="player__video" poster={posterImage}></video>
    </React.ReactFragment>
  );

};

VideoPlayer.propTypes = {
  videoLink: PropTypes.string,
  posterImage: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number

};

export default VideoPlayer;
