import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';


const FilmReviews = () => {
  const reviews = useSelector(({DATA}) => DATA.reviews);

  if (!reviews) {
    return null;
  }
  const firstHalf = reviews.slice(0, Math.round((reviews.length / 2)));
  const secondHalf = reviews.slice(Math.round((reviews.length / 2)));

  return (
    <React.Fragment>
      <div className="movie-card__reviews movie-card__row">
        {secondHalf.length > 0 ?
          <React.Fragment>
            <div className="movie-card__reviews-col">
              {firstHalf.map((review) => {
                const date = new Date(review.date);
                return (
                  <div className="review" key={review.id}>
                    <blockquote className="review__quote">
                      <p className="review__text">{review.comment}</p>

                      <footer className="review__details">
                        <cite className="review__author">{review.user.name}</cite>
                        <time className="review__date" dateTime="2016-12-20">{date.toLocaleDateString(`en`, {month: `long`, day: `numeric`, year: `numeric`})}</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">{review.rating}</div>
                  </div>
                );
              })
              }</div>
            <div className="movie-card__reviews-col">
              {secondHalf.map((review) => {
                const date = new Date(review.date);
                return (
                  <div className="review" key={review.id}>
                    <blockquote className="review__quote">
                      <p className="review__text">{review.comment}</p>

                      <footer className="review__details">
                        <cite className="review__author">{review.user.name}</cite>
                        <time className="review__date" dateTime="2016-12-20">{date.toLocaleDateString(`en`, {month: `long`, day: `numeric`, year: `numeric`})}</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">{review.rating}</div>
                  </div>
                );
              })
              }</div>
          </React.Fragment>
          : <div className="movie-card__reviews-col">
            {firstHalf.map((review) => {
              const date = new Date(review.date);
              return (
                <div className="review" key={review.id}>
                  <blockquote className="review__quote">
                    <p className="review__text">{review.comment}</p>

                    <footer className="review__details">
                      <cite className="review__author">{review.user.name}</cite>
                      <time className="review__date" dateTime="2016-12-20">{date.toLocaleDateString(`en`, {month: `long`, day: `numeric`, year: `numeric`})}</time>
                    </footer>
                  </blockquote>

                  <div className="review__rating">{review.rating}</div>
                </div>
              );
            })} </div>

        }
      </div>
    </React.Fragment>
  );
};


FilmReviews.propTypes = {
  film: PropTypes.object,
  reviews: PropTypes.arrayOf(PropTypes.object),
  onReviewsLoad: PropTypes.func.isRequired,
  isReviewsLoaded: PropTypes.bool,
};


export default FilmReviews;
