import React, {useState} from 'react';
import PropTypes from 'prop-types';
import browserHistory from '../../browser-history';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Link, NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFilmsList, postFavorite} from '../../store/api-actions';

const FilmButtons = (props) => {
  const {film} = props;
  const [isInFavorite, setFavorite] = useState(film.is_favorite);
  const authorizationStatus = useSelector(({USER}) => USER.authorizationStatus);
  const dispatch = useDispatch();
  const addToFavoriteHadndler = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      dispatch(postFavorite(film.id, film.is_favorite === true ? 0 : 1));
      dispatch(fetchFilmsList());
      setFavorite(film.is_favorite === true ? false : true);
    } else {
      browserHistory.push(AppRoute.LOGIN);
    }
  };


  return (
    <React.Fragment>
      <div className="movie-card__buttons">

        <button className="btn btn--play movie-card__button" type="button">
          <NavLink to={{pathname: `/player/` + film.id}} style={{color: `#eee5b5`, textDecoration: `none`}}>
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref="#play-s" />
            </svg>
            <span>Play</span>
          </NavLink>
        </button>

        <button className="btn btn--list movie-card__button" onClick={() => addToFavoriteHadndler()} type="button">
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

        {authorizationStatus === AuthorizationStatus.AUTH && <Link className="btn movie-card__button" to={
          {
            pathname: `${AppRoute.FILMS}/${film.id}/review`,
            state: film
          }
        }>Add review
        </Link>
        }
      </div>
    </React.Fragment>

  );
};

FilmButtons.propTypes = {
  film: PropTypes.object,
};

export default FilmButtons;
