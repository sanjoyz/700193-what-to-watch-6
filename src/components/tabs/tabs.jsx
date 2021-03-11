import React, {useState} from 'react';

const Tabs = (props) => {
  const {film} = props;
  const [tab, setTab] = useState(1);

  return (
    <React.Fragment>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link" onClick={()=>setTab(1)}>Overview</a>
            </li>
            <li className="movie-nav__item movie-nav__item--active">
              <a href="#" className="movie-nav__link" onClick={()=>setTab(2)}>Details</a>
            </li>
            <li className="movie-nav__item">
              <a href="#" className="movie-nav__link" onClick={()=>setTab(3)}>Reviews</a>
            </li>
          </ul>
        </nav>
        {tab === 1 &&
        <div>
          <div className="movie-rating">
            <div className="movie-rating__score">{film.rating}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">Very good</span>
              <span className="movie-rating__count">{film.scores_count} ratings</span>
            </p>
          </div>


          <div className="movie-card__text">
            <p>{film.description}</p>

            <p>Gustave prides himself on providing first-class service to the hotel&apos;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&apos;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

            <p className="movie-card__director"><strong>{film.director}</strong></p>

            <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)} and other</strong></p>
          </div>
        </div>
        }
        <div className="movie-card__text movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">Wes Andreson</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value">
                Bill Murray, <br />
                Edward Norton, <br />
                Jude Law, <br />
                Willem Dafoe, <br />
                Saoirse Ronan, <br />
                Tony Revoloru, <br />
                Tilda Swinton, <br />
                Tom Wilkinson, <br />
                Owen Wilkinson, <br />
                Adrien Brody, <br />
                Ralph Fiennes, <br />
                Jeff Goldblum
              </span>
            </p>
          </div>
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">1h 39m</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">Comedy</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">2014</span>
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>

  );
};

export default Tabs;
