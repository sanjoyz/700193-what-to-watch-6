import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main';
import PropTypes from 'prop-types';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import {connect} from 'react-redux';


const App = (props) => {
  const {movieCardsCount, promoFilmName, promoFilmGenre, promoFilmReliseYear, films} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main movieCardsCount={movieCardsCount}
            promoFilmName={promoFilmName}
            promoFilmGenre={promoFilmGenre}
            promoFilmReliseYear={promoFilmReliseYear}
            films = {films}
          />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList films = {films}/>
        </Route>
        <Route exact path="/films/:id" component={Film}/>
        <Route exact path="/films/:id/review">
          <AddReview name={films[0].name} previewImage={films[0].preview_image}/>
        </Route>
        <Route exact path="/player/:id">
          <Player film={films[0]}/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
App.propTypes = {
  movieCardsCount: PropTypes.number.isRequired,
  promoFilmName: PropTypes.string.isRequired,
  promoFilmGenre: PropTypes.string.isRequired,
  promoFilmReliseYear: PropTypes.string.isRequired,
  films: PropTypes.array
};

const mapStateToProps = (state) => ({
  films: state.films,
  movieCardsCount: state.MOVIE_CARD_DEFAULT_COUNT,
  promoFilmName: state.PROMO_FILM_NAME,
  promoFilmGenre: state.PROMO_FILM_GENRE,
  promoFilmReliseYear: state.PROMO_FILM_RELISE_YEAR,
});


export {App};
export default connect(mapStateToProps)(App);
