import React from 'react';
import PropTypes from 'prop-types';


const ShowMore = (props) => {
  const {filmsShown, films, showMoreHanlder} = props;
  return (
    filmsShown >= films.length ? ` ` :
      <React.Fragment>
        <div className="catalog__more">
          <button className="catalog__button" onClick={showMoreHanlder} type="button">Show more</button>
        </div>
      </React.Fragment>
  );
};

ShowMore.propTypes = {
  filmsShown: PropTypes.number.isRequired,
  films: PropTypes.array.isRequired,
  showMoreHanlder: PropTypes.func,
};

export default ShowMore;

