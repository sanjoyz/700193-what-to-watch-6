import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmList from '../film-list/film-list';
import GenreList from '../genre-list/genre-list';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {postFavorite} from '../../store/api-actions';
import UserBlock from '../user-block/user-block';

const Main = (props) => {
  const {films, promoFilm} = props;
  const dispatch = useDispatch();
  const onMyListAdd = (id, status) => {
    dispatch(postFavorite(id, status));
  };
  const [isInFavorite, setIsInFavorite] = useState(promoFilm.is_favorite);
  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={promoFilm.background_image} alt="The Grand Budapest Hotel" />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <UserBlock/>
        </header>
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={promoFilm.poster_image} alt="The Grand Budapest Hotel poster" width={218} height={327} />
            </div>
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{promoFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{promoFilm.genre}</span>
                <span className="movie-card__year">{promoFilm.released}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <NavLink to={{pathname: `/player/:` + promoFilm.id}} style={{color: `#eee5b5`, textDecoration: `none`}}>
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </NavLink>
                </button>
                <button className="btn btn--list movie-card__button" onClick={() => {
                  onMyListAdd(promoFilm.id, promoFilm.is_favorite === true ? 0 : 1);
                  setIsInFavorite(promoFilm.is_favorite === true ? false : true);
                }} type="button">
                  {isInFavorite ? <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref="#in-list"></use>
                  </svg>
                    :
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                  }
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList films={films}/>
          <FilmList films={films}/>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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

Main.propTypes = {
  films: PropTypes.array,
  promoFilm: PropTypes.object
};
export default React.memo(Main);
