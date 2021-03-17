import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import {connect} from 'react-redux';

const FilmList = (props) => {
  const {films} = props;
  return (
    <React.Fragment>
      {films.map((film, index) => {
        return index < 8 ?
          <MovieCard
            key={film.id}
            previewImage={film.preview_image}
            name={film.name}
            id={film.id}
            posterImage={film.poster_image}
            videoLink={film.video_link}
          />
          : ``;

      })}
    </React.Fragment>
  );
};

FilmList.propTypes = {
  films: PropTypes.array,
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films
});

export {FilmList};
export default React.memo(connect(mapStateToProps, null)(FilmList));

