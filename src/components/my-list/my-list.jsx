import React, {useEffect} from 'react';
import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';

const MyList = (props) => {
  const {favoriteFilms} = props;
  useEffect(() => {

  }, [favoriteFilms]);
  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <h1 className="page-title user-page__title">My list</h1>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <div className="catalog__movies-list">
            {favoriteFilms && favoriteFilms.map((film) => (
              <MovieCard
                key={film.id}
                previewImage={film.preview_image}
                name={film.name}
                id={film.id}
                onHover = {()=>{}}
              />
            ))}
          </div>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};
MyList.propTypes = {
  films: PropTypes.array,
  favoriteFilms: PropTypes.object,
  isFavoriteFilmsLoaded: PropTypes.bool,
  loadFavorites: PropTypes.func,
};

export default MyList;

