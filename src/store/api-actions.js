import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {ActionCreator} from './action';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.getFilmsList(data)))
);

export const fetchFilmComments = () => (dispatch, _getState, api) => (
  api.get(APIRoute.COMMENTS)
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

export const signIn = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
);
