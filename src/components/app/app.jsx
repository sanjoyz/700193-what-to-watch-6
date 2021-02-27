import React, {useEffect} from 'react';
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
import {fetchFilmsList, fetchPromoFilm} from '../../store/api-actions';


const App = (props) => {
  const {films, promoFilm, onLoadData, isDataLoaded} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main films={films} promoFilm={promoFilm}/>
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList films = {films}/>
        </Route>
        <Route exact path="/films/:id" component={Film}/>
        <Route exact path="/films/:id/review">
          <AddReview /* name={films[0].name} previewImage={films[0].preview_image}*//>
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
  films: PropTypes.array,
  promoFilm: PropTypes.object,
  onLoadData: PropTypes.func,
  isDataLoaded: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  films: state.films,
  promoFilm: state.promoFilm,
  isDataLoaded: state.isDataLoaded,
  movieCardsCount: state.MOVIE_CARD_DEFAULT_COUNT,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFilmsList());
    dispatch(fetchPromoFilm());
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
