import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

const initState = {authorizationStatus: AuthorizationStatus.NO_AUTH};
const user = (state = initState, action) => {
  switch (action.type) {
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.value
      };
    case ActionType.GET_USER:
      return {
        ...state,
        userInfo: action.value
      };
  }
  return state;
};
export {user};

