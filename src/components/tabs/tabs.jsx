import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Overview from '../overview/overview';
import Details from '../details/details';
import FilmReviews from '../film-reviews/films-reviews';

const Tabs = (props) => {
  const {film, comments} = props;
  const [tab, setTab] = useState(`Overview`);
  const navClickHandler = (evt) => {
    evt.preventDefault();
    switch (evt.target.text) {
      case `Overview`:
        setTab(`Overview`);
        break;
      case `Details`:
        setTab(`Details`);
        break;
      case `Reviews`:
        setTab(`Reviews`);
        break;
    }
  };
  return (
    <React.Fragment>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className={`movie-nav__item ${tab === `Overview` ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link" onClick={navClickHandler}>Overview</a>
            </li>
            <li className={`movie-nav__item ${tab === `Details` ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link" onClick={navClickHandler}>Details</a>
            </li>
            <li className={`movie-nav__item ${tab === `Reviews` ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link" onClick={navClickHandler}>Reviews</a>
            </li>
          </ul>
        </nav>
        {tab === `Overview` && <Overview film={film}/>}
        {tab === `Details` && <Details film={film}/>}
        {tab === `Reviews` && <FilmReviews comments={comments}/>}
      </div>

    </React.Fragment>

  );
};

Tabs.propTypes = {
  film: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object),
};
export default Tabs;
