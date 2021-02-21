import {ActionType} from "./action";
const initState = {
  genre: ``,
  filmList: []
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    case ActionType.GET_FILMS_LIST:
      return {
        ...state,
        filmList: action.payload

      };

    default:
      return state;
  }
};

export {reducer};
