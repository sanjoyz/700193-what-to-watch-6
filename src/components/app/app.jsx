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
import {fetchFilmsList, fetchPromoFilm, fetchFavoriteFilms} from '../../store/api-actions';
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
        <Route exact path={AppRoute.MAIN}>
          <Main films={films} promoFilm={promoFilm}/>
        </Route>

        <Route exact path={AppRoute.LOGIN}>
          <SignIn/>
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.MYLIST}
          render={() => {
            return (
              <MyList/>
            );
          }}
        />

        <Route exact path={`${AppRoute.FILMS}/:id`} component={(route) => <Film route={route} films={films}/>}/>

        <PrivateRoute
          exact
          path={`${AppRoute.FILMS}/:id/review`}
          render={(route) => {
            return (
              <AddReview route={route}/>
            );
          }}/>

        <Route exact path={`${AppRoute.PLAYER}/:id`} component={(route) => <Player films={films} route={route}/>}/>

        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
App.propTypes = {
  films: PropTypes.array.isRequired,
  promoFilm: PropTypes.object.isRequired,
  onLoadData: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = ({DATA}) => ({
  films: DATA.films,
  promoFilm: DATA.promoFilm,
  isDataLoaded: DATA.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFilmsList());
    dispatch(fetchPromoFilm());
    dispatch(fetchFavoriteFilms());
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
