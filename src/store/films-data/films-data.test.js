import {filmsData} from './films-data';
import {ActionType} from '../action';
import initState from '../initialState';

describe(`Reducers for films data work correctly `, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(filmsData(undefined, {})).toEqual(initState);
  });

  it(`Reducer should return films and upadte isDataLoaded status`, () => {
    const action = {
      value: [`new film`, `new film 2`],
      type: ActionType.GET_FILMS_LIST
    };
    expect(filmsData({films: [], isDataLoaded: false}, action)).toEqual({films: action.value, isDataLoaded: true});
  });
  it(`Reducer should return promo Film `, () => {
    const action = {
      value: {newPromoFilm: `film`},
      type: ActionType.GET_PROMO_FILM
    };
    expect(filmsData({promoFilm: {}}, action)).toEqual({promoFilm: action.value});
  });
  it(`Reducer should return film comments and update isCommetsLoaded status`, () => {
    const action = {
      value: [{id: 1, user: {id: 13, name: `Chelovek`}, rating: 1.4, comment: `very interesting opinion`, date: `2021-03-07T08:04:28.658Z`}],
      type: ActionType.GET_FILM_COMMENTS
    };
    expect(filmsData({comments: [], isCommentsLoaded: false}, action)).toEqual({comments: action.value, isCommentsLoaded: true});
  });
  it(`Reducer should return favorites and update isFavoritesLoaded status`, () => {
    const action = {
      value: [`new film`, `new film 2`],
      type: ActionType.GET_FAVORITES
    };
    expect(filmsData({favoriteFilms: [], isFavoriteFilmsLoaded: false}, action)).toEqual({favoriteFilms: action.value, isFavoriteFilmsLoaded: true});
  });
  it(`Reducer should post review`, () => {
    const action = {
      value: {id: 1, user: {id: 13, name: `Chelovek`}, rating: 1.4, comment: `very interesting opinion`, date: `2021-03-07T08:04:28.658Z`},
      type: ActionType.POST_REVIEW
    };
    expect(filmsData({review: {}}, action)).toEqual({review: action.value});
  });
  it(`Reducer should post favorite`, () => {
    const action = {
      value: {favoriteFilm: `filmssss`},
      type: ActionType.POST_FAVORITE
    };
    expect(filmsData({favoriteFilms: {}}, action)).toEqual({favoriteFilms: action.value});
  });


});
