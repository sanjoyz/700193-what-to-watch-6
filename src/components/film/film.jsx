import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '../tabs/tabs';
import {fetchFilmComments, postFavorite} from '../../store/api-actions';
import {connect} from 'react-redux';
import NotFound from '../not-found/not-found';
import {Link} from 'react-router-dom';
const Film = (props) => {
  const id = parseInt(props.route.match.params.id.slice(1), 10);
  const {isCommentsLoaded, onCommentsLoad, comments, authorizationStatus, onMyListAdd} = props;
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
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
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
                <Link to={{pathname: `/player/:` + currentFilm.id}}>
                  <button className="btn btn--play movie-card__button" type="button">
                    <svg viewBox="0 0 19 19" width={19} height={19}>
                      <use xlinkHref="#play-s" />
                    </svg>
                    <span>Play</span>
                  </button>
                </Link>
                <button className="btn btn--list movie-card__button" onClick={() => onMyListAdd(id, currentFilm.is_favorite === true ? 0 : 1)} type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {authorizationStatus && <Link className="btn movie-card__button" to={
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
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__movies-list">
            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Macbeth</a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">Aviator</a>
              </h3>
            </article>
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
};

const mapStateToProps = ({DATA, USER}) => ({
  comments: DATA.comments,
  isCommentsLoaded: DATA.isCommentsLoaded,
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onCommentsLoad(id) {
    dispatch(fetchFilmComments(id));
  },
  onMyListAdd(id, favoriteStatus) {
    debugger;
    dispatch(postFavorite(id, favoriteStatus));
  }
});


export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
