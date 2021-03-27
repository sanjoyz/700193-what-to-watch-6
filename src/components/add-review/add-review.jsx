import React from 'react';
import PropTypes from 'prop-types';
import {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {postReview} from '../../store/api-actions';
import {useHistory} from 'react-router-dom';
import {TEXT_AREA} from '../../const';
const AddReview = (props) => {
  const film = props.route.location.state;
  const id = props.route.match.params.id.slice(1);
  const [reviewForm, setReviewForm] = useState({
    "rating": 1,
    "review-text": ``,
    "isInputValid": false
  });
  const ratingRef = useRef();
  const commentRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  // const [isInputValid, setInputValid] = useState(false);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(postReview({
      rating: ratingRef.current.value,
      comment: commentRef.current.value,
      id,
    }));
    history.push(`/films/:` + id);
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setReviewForm({...reviewForm,
      [name]: value,
      isInputValid: reviewForm.rating && (reviewForm[`review-text`].length > TEXT_AREA.minLength && reviewForm[`review-text`].length < TEXT_AREA.maxLength) ? true : false});
  };
  const ratingStars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.background_image} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="movie-page.html" className="breadcrumbs__link">{film.name}</a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__poster movie-card__poster--small">
            <img src={film.preview_image} alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
        </div>
        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={handleSubmit}>
            <div className="rating">
              <div className="rating__stars">
                {ratingStars.map((star) => {
                  return ([
                    <input className="rating__input" key={star} id={`star-` + star} type="radio" name="rating" value={star} ref={ratingRef} onChange={handleFieldChange}/>,
                    <label className="rating__label" key={star + Math.random()} htmlFor={`star-` + star}>{`Rating ` + star}</label>
                  ]
                  );
                })}
              </div>
            </div>

            <div className="add-review__text">
              <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" ref={commentRef} onChange={handleFieldChange}></textarea>
              <div className="add-review__submit">
                <button disabled={!reviewForm.isInputValid} className="add-review__btn" type="submit">Post</button>
              </div>

            </div>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

AddReview.propTypes = {
  filmName: PropTypes.string,
  previewImage: PropTypes.string,
  onReviewSubmit: PropTypes.func,
  route: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.object,
    }),
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    }),
  }),
};

export default AddReview;
