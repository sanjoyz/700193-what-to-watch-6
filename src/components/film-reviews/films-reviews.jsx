import React from 'react';
import PropTypes from 'prop-types';
const FilmReviews = (props) => {
  const {comments} = props;
  return (
    <React.Fragment>
      <div className="movie-card__reviews-col">
        {comments.map((comment) => {
          let date = new Date(comment.date);
          return (
            <div className="review" key={comment.id}>
              <blockquote className="review__quote">
                <p className="review__text">{comment.comment}</p>

                <footer className="review__details">
                  <cite className="review__author">{comment.user.name}</cite>
                  <time className="review__date" dateTime="2016-12-20">{date.toLocaleDateString(`en`, {month: `long`, day: `numeric`, year: `numeric`})}</time>
                </footer>
              </blockquote>

              <div className="review__rating">{comment.rating}</div>
            </div>
          );
        })

        }

      </div>
    </React.Fragment>
  );
};
FilmReviews.propTypes = {
  film: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object),
};
export default FilmReviews;
