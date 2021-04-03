import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '../tabs/tabs';
import NotFound from '../not-found/not-found';
import {NavLink, useParams} from 'react-router-dom';
import MoreLikeThis from '../more-like-this/more-like-this';
import UserBlock from '../user-block/user-block';
import {AppRoute} from '../../const';
import FilmButtons from '../film-buttons/film-buttons';
import {fetchFilmReviews} from '../../store/api-actions';
import {useDispatch} from 'react-redux';


const Film = (props) => {
  const {id} = useParams();
  const [...filmsArray] = props.films;

  if (id > filmsArray.length) {
    return <NotFound></NotFound>;
  }
  const filter = filmsArray.filter((film) => (film.id === parseInt(id, 10)));
  const currentFilm = filter[0];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilmReviews(id));
  }, [currentFilm]);
  return (
    <React.Fragment>
      <section className="movie-card movie-card--full" style={{backgroundColor: currentFilm.background_color}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={currentFilm.background_image} alt={currentFilm.name}/>
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header movie-card__head">
            <div className="logo">
              <NavLink to={{pathname: AppRoute.MAIN}} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </NavLink>
            </div>
            <UserBlock/>
          </header>
          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{currentFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{currentFilm.genre}</span>
                <span className="movie-card__year">{currentFilm.released}</span>
              </p>
              <FilmButtons film={currentFilm}/>
            </div>
          </div>
        </div>
        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={currentFilm.poster_image} alt={currentFilm.name} width="218" height="327" />
            </div>
            <div className="movie-card__desc">
              <Tabs film={currentFilm}/>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <MoreLikeThis film={currentFilm} films={filmsArray}/>
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
Film.propTypes = {
  films: PropTypes.array.isRequired,
  route: PropTypes.shape({
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    }),
  }),
};

export default Film;
