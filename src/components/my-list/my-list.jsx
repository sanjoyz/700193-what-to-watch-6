import React from 'react';
import MovieCard from '../movie-card/movie-card';
import UserBlock from '../user-block/user-block';
import {NavLink} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useSelector} from 'react-redux';


const MyList = () => {
  const favoriteFilms = useSelector(({DATA}) => DATA.favoriteFilms);

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
                posterImage={film.poster_image}
                videoLink={film.video_link}
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

export default MyList;


