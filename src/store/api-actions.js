import {APIRoute, AuthorizationStatus} from '../const';
import {ActionCreator} from './action';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.getFilmsList(data)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
      .then(({data}) => dispatch(ActionCreator.getPromoFilm(data)))
);

export const login = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
        .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);
