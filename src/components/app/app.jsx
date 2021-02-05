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

const App = (props) => {
  const {movieCardsCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main movieCardsCount={movieCardsCount}
            promoFilmName={props.promoFilmName}
            promoFilmGenre={props.promoFilmGenre}
            promoFilmReliseYear={props.promoFilmReliseYear}
          />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id">
          <Film />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
        <Route exact path="/player/:id">
          <Player />
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
  promoFilmReliseYear: PropTypes.number.isRequired
};

export default App;
