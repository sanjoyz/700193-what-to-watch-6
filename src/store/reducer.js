import {ActionType} from "./action";
import initState from "./initialState";

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.value
      };
    case ActionType.GET_FILMS_LIST:
      return {
        ...state,
        filmList: action.value

      };

    default:
      return state;
  }
};

export {reducer};
