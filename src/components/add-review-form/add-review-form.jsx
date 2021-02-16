import React, {useState} from 'react';

const AddReviewForm = () => {
  const [reviewForm, setReviewForm] = useState({
    rating: 1,
    text: ``,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setReviewForm({...reviewForm, [name]: value});
  };

  const ratingStars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {ratingStars.map((star) => {
              return ([
                <input className="rating__input" key={star} id={`star-` + star} type="radio" name="rating" value={star} onChange={handleFieldChange}/>,
                <label className="rating__label" key={star} htmlFor={`star-` + star}>{`Rating ` + star}</label>
              ]
              );
            })}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleFieldChange}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default AddReviewForm;
