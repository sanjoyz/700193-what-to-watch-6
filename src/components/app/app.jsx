import React, {useEffect} from 'react';
import {Router as BrowserRouter, Route, Switch} from 'react-router-dom';
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
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import {AppRoute} from '../../const';
import browserHistory from '../../browser-history';

const App = (props) => {
  const {films, promoFilm, onLoadData, isDataLoaded} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);
  if (!isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <PrivateRoute
          exact
          path={AppRoute.MAIN}
          render={() => {
            return (
              <Main films={films} promoFilm={promoFilm}/>
            );
          }}
        />
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/mylist">
          <MyList films = {films}/>
        </Route>
        <Route exact path="/films/:id" component={(route) => <Film route={route} films={films}/>}/>
        <Route exact path="/films/:id/review">
          <AddReview/>
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
