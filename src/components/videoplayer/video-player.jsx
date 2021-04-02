import React from 'react';
import PropTypes from 'prop-types';


const VideoPlayer = (props) => {
  const {videoLink, height, width} = props;

  return (
    <React.Fragment>
      <video width={width} height={height} src={videoLink} muted autoPlay></video>
    </React.Fragment>
  );

};

VideoPlayer.propTypes = {
  videoLink: PropTypes.string,
  posterImage: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default VideoPlayer;
