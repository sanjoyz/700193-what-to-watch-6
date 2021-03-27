import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '../tabs/tabs';
import {fetchFilmComments, postFavorite} from '../../store/api-actions';
import {connect} from 'react-redux';
import NotFound from '../not-found/not-found';
import {Link, NavLink} from 'react-router-dom';
import MoreLikeThis from '../more-like-this/more-like-this';
import {AppRoute, AuthorizationStatus} from '../../const';
const Film = (props) => {
  const id = parseInt(props.route.match.params.id.slice(1), 10);
  const {isCommentsLoaded, onCommentsLoad, comments, authorizationStatus, onMyListAdd, userInfo} = props;
  const [...filmsArray] = props.films;

  if (id > filmsArray.length) {
    return <NotFound></NotFound>;
  }
  const filter = filmsArray.filter((film) => (film.id === id));
  const currentFilm = filter[0];
  useEffect(() => {
    if (!isCommentsLoaded) {
      onCommentsLoad(id);
    }
  }, [isCommentsLoaded]);

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={currentFilm.background_image} alt={currentFilm.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              {authorizationStatus === AuthorizationStatus.AUTH &&
                <div className="user-block__avatar">
                  <Link to={{pathname: AppRoute.MYLIST}}>
                    <img src={userInfo.avatar_url} alt={userInfo.name} width="63" height="63" />
                  </Link>
                </div>
              }
              {
                authorizationStatus === AuthorizationStatus.NO_AUTH &&
                <Link to={{pathname: AppRoute.LOGIN}} className={`user-block__link`}>
                  Sign in
                </Link>
              }
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{currentFilm.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{currentFilm.genre}</span>
                <span className="movie-card__year">{currentFilm.released}</span>
              </p>

              <div className="movie-card__buttons">

                <button className="btn btn--play movie-card__button" type="button">
                  <NavLink to={{pathname: `/player/:` + currentFilm.id}} style={{color: `#eee5b5`, textDecoration: `none`}}>
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </NavLink>
                </button>

                <button className="btn btn--list movie-card__button" onClick={() => onMyListAdd(id, currentFilm.is_favorite === true ? 0 : 1)} type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus === `AUTH` && <Link className="btn movie-card__button" to={
                  {
                    pathname: `/films/:` + id + `/review`,
                    state: currentFilm
                  }
                }>
                Add review
                </Link>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={currentFilm.poster_image} alt={currentFilm.name} width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <Tabs film = {currentFilm} comments={comments}/>
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
  films: PropTypes.array,
  film: PropTypes.object,
  route: PropTypes.shape({
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    }),
  }),
  isCommentsLoaded: PropTypes.bool,
  onCommentsLoad: PropTypes.func,
  comments: PropTypes.arrayOf(PropTypes.object),
  authorizationStatus: PropTypes.string,
  onMyListAdd: PropTypes.func,
  userInfo: PropTypes.object,
};

const mapStateToProps = ({DATA, USER}) => ({
  comments: DATA.comments,
  isCommentsLoaded: DATA.isCommentsLoaded,
  authorizationStatus: USER.authorizationStatus,
  userInfo: USER.userInfo
});

const mapDispatchToProps = (dispatch) => ({
  onCommentsLoad(id) {
    dispatch(fetchFilmComments(id));
  },
  onMyListAdd(id, favoriteStatus) {
    dispatch(postFavorite(id, favoriteStatus));
  }
});


export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
