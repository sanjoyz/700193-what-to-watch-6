import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card';
import {connect} from 'react-redux';

const FilmList = (props) => {
  const {films} = props;
  return (
    <React.Fragment>
      {films.map((film) => {
        return <MovieCard
          key={film.id}
          previewImage={film.preview_image}
          name={film.name}
          id={film.id}
          posterImage={film.poster_image}
          videoLink={film.video_link}
        />;
      })}
    </React.Fragment>
  );
};

FilmList.propTypes = {
  films: PropTypes.array,
};

const mapStateToProps = (state) => ({
  films: state.films
});

export {FilmList};
export default connect(mapStateToProps, null)(FilmList);

