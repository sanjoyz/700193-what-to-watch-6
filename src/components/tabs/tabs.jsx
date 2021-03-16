import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Overview from '../overview/overview';
import Details from '../details/details';
import FilmReviews from '../film-reviews/films-reviews';

const Tabs = (props) => {
  const {film} = props;
  const [tab, setTab] = useState(1);
  const navClickHandler = (evt) => {
    evt.preventDefault();
    switch (evt.target.text) {
      case `Overview`:
        setTab(1);
        break;
      case `Details`:
        setTab(2);
        break;
      case `Reviews`:
        setTab(3);
        break;
    }
  };
  // movie-nav__item--active
  return (
    <React.Fragment>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className={`movie-nav__item ${tab === 1 ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link" onClick={navClickHandler}>Overview</a>
            </li>
            <li className={`movie-nav__item ${tab === 2 ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link" onClick={navClickHandler}>Details</a>
            </li>
            <li className={`movie-nav__item ${tab === 3 ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link" onClick={navClickHandler}>Reviews</a>
            </li>
          </ul>
        </nav>
        {tab === 1 && <Overview film={film}/>}
        {tab === 2 && <Details film={film}/>}
        {tab === 3 && <FilmReviews reviews={film}/>}
      </div>

    </React.Fragment>

  );
};

Tabs.propTypes = {
  film: PropTypes.object,
};
export default Tabs;
