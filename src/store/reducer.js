import {ActionType} from "./action";
import initState from "./initialState";

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.value.target.innerText
      };
    case ActionType.FILTER_FILMS:
      if (action.value.target.innerText === `All genres`) {
        return {...state,
          films: action.value
        };
      } else {
        return {
          ...state,
          films: state.films.filter((e) => (e.genre === action.value.target.innerText))
        };
      }
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
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.value
      };
    default:
      return state;
  }
};

export {reducer};
