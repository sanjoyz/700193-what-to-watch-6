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
  }
  return state;
};

export {filmsData};
