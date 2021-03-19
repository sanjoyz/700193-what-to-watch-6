import React from 'react';
import PropTypes from 'prop-types';
import AddReviewForm from '../add-review-form/add-review-form';
const AddReview = (props) => {
  const {name, previewImage} = props;
  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__header">
          <div className="movie-card__bg">
            <img src={previewImage} alt={name} />
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
                  <a href="movie-page.html" className="breadcrumbs__link">{name}</a>
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
            <img src={previewImage} alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
        </div>
        <AddReviewForm/>
      </section>
    </React.Fragment>
  );
};

AddReview.propTypes = {
  name: PropTypes.string,
  previewImage: PropTypes.string,
};

export default AddReview;
