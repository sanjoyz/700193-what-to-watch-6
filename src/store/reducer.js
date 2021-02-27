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
          films: initState.films
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
      };
    }
    case ActionType.GET_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.value,
      };
    default:
      return state;
  }
};

export {reducer};
