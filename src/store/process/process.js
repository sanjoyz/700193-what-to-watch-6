import {ActionType} from '../action';

const initState = {
  filteredFilms: ``,
  genre: `All genre`,
  films: ``,
};
const process = (state = initState, action) => {

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
  }
  return state;
};

export {process};
