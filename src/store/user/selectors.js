import NameSpace from '../root-reducer';

export const getAuthorizatonStatus = (state) => state[NameSpace.USER].authorizationStatus;
