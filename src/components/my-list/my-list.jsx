import React from 'react';
import MovieCard from '../movie-card/movie-card';
import PropTypes from 'prop-types';
import UserBlock from '../user-block/user-block';
import {NavLink} from 'react-router-dom';
import {AppRoute} from '../../const';


const MyList = (props) => {
  const {favoriteFilms} = props;

  return (
    <React.Fragment>
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <NavLink to={{pathname: AppRoute.MAIN}} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </NavLink>
          </div>
          <h1 className="page-title user-page__title">My list</h1>
          <UserBlock/>
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
  authorizationStatus: PropTypes.string,
  userInfo: PropTypes.object,
};


export default MyList;


