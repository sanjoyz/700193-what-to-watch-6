import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Overview from '../overview/overview';
import Details from '../details/details';
import FilmReviews from '../film-reviews/films-reviews';
import {TabsEnum} from '../../const';

const Tabs = (props) => {
  const {film} = props;

  const [tab, setTab] = useState(TabsEnum.OVERVIEW);
  const navClickHandler = (evt) => {
    evt.preventDefault();
    switch (evt.target.text) {
      case TabsEnum.OVERVIEW:
        setTab(TabsEnum.OVERVIEW);
        break;
      case TabsEnum.DETAILS:
        setTab(TabsEnum.DETAILS);
        break;
      case TabsEnum.REVIEWS:
        setTab(TabsEnum.REVIEWS);
        break;
    }
  };
  return (
    <React.Fragment>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className={`movie-nav__item ${tab === TabsEnum.OVERVIEW ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link" onClick={navClickHandler}>Overview</a>
            </li>
            <li className={`movie-nav__item ${tab === TabsEnum.DETAILS ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link" onClick={navClickHandler}>Details</a>
            </li>
            <li className={`movie-nav__item ${tab === TabsEnum.REVIEWS ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link" onClick={navClickHandler}>Reviews</a>
            </li>
          </ul>
        </nav>
        {tab === TabsEnum.OVERVIEW && <Overview film={film}/>}
        {tab === TabsEnum.DETAILS && <Details film={film}/>}
        {tab === TabsEnum.REVIEWS && <FilmReviews/>}
      </div>

    </React.Fragment>

  );
};

Tabs.propTypes = {
  film: PropTypes.object.isRequired,
};
export default Tabs;
