import React from 'react';
import PropTypes from 'prop-types';
import {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {postReview} from '../../store/api-actions';
import {NavLink, useHistory, useParams} from 'react-router-dom';
import {AppRoute, TEXT_AREA} from '../../const';
import UserBlock from '../user-block/user-block';


const AddReview = (props) => {
  const film = props.route.location.state;
  const {id} = useParams();
  const [reviewForm, setReviewForm] = useState({
    "rating": 1,
    "review-text": ``,
    "isInputValid": false
  });
  const ratingRef = useRef();
  const commentRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = document.querySelector(`form`);
    const btn = form.querySelector(`input[type=submit], button[type=submit]`);
    const textArea = form.querySelector(`textarea`);
    textArea.disabled = true;
    btn.disabled = true;
    try {
      dispatch(postReview({
        rating: ratingRef.current.value,
        comment: commentRef.current.value,
        id,
      }));
    } catch (error) {
      textArea.textContent = error;
    }


    history.push(`${AppRoute.FILMS}/${id}`);
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
      <section className="movie-card movie-card--full" style={{backgroundColor: film.background_color}}>
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={film.background_image} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <div className="logo">
              <NavLink to={{pathname: AppRoute.MAIN}} className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </NavLink>
            </div>

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <NavLink to={{pathname: `${AppRoute.FILMS}/${film.id}`}}className={`breadcrumbs__link`}>
                    {film.name}
                  </NavLink>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <UserBlock/>
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
                  return (
                    <>
                      <input className="rating__input" key={star} id={`star-` + star} type="radio" name="rating" value={star} ref={ratingRef} onChange={handleFieldChange}/>
                      <label className="rating__label" key={star + Math.random()} htmlFor={`star-` + star}>{`Rating ` + star}</label>
                    </>
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
