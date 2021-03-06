import {ActionType} from '../action';
import initState from '../initialState';
const user = (state = initState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.value
      };

  }
  return state;
};
export {user};

