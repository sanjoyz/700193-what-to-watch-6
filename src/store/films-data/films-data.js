import {ActionType} from '../action';
import initState from '../initialState';

const filmsData = (state = initState, action) => {
  switch (action.type) {
    case ActionType.GET_FILMS_LIST:
    {
      return {
        ...state,
        films: action.value,
        isDataLoaded: true,
      };
    }
    case ActionType.GET_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.value,
      };
    case ActionType.GET_FILM_COMMENTS:
      return {
        ...state,
        comments: action.value,
        isCommentsLoaded: true
      };
    case ActionType.GET_FAVORITES:
      return {
        ...state,
        favoriteFilms: action.value,
        isFavoriteFilmsLoaded: true
      };
    case ActionType.POST_REVIEW:
      return {
        ...state,
        review: action.value,
      };
    case ActionType.POST_FAVORITE:
      return {
        ...state,
        favoriteFilms: action.value
      };
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.value.target.innerText
      };
    case ActionType.FILTER_FILMS:
      if (action.value.target.innerText === `All genres`) {
        return {...state,
          filteredFilms: state.films
        };
      } else {
        return {
          ...state,
          filteredFilms: state.films.filter((e) => (e.genre === action.value.target.innerText))
        };
      }
  }
  return state;
};

export {filmsData};
