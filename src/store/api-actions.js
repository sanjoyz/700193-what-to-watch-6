import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {ActionCreator} from './action';

export const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.getFilmsList(data)))
);

export const fetchFilmReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
  .then(({data}) => dispatch(ActionCreator.getFilmReviews(data)))
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
      .then(({data}) => dispatch(ActionCreator.getPromoFilm(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((authInfo) => dispatch(ActionCreator.getUser(authInfo.data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const signIn = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((authInfo) => dispatch(ActionCreator.getUser(authInfo.data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
);

export const postReview = ({id, rating, comment}) => (dispatch, _getState, api) => {
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
    .then((comments) => {
      dispatch(ActionCreator.pushReview(comments.data));
      dispatch(ActionCreator.getFilmReviews(comments.data));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.FILMS + `:/` + id)));
};

export const postFavorite = (id, status) => (dispatch, _getState, api) => {
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then((result) => {
      dispatch(ActionCreator.postFavorite(result.data));
    });
};

export const fetchFavoriteFilms = () => (dispatch, _getState, api) => {
  api.get(APIRoute.FAVORITE)
    .then((result) => dispatch(ActionCreator.getFavorite(result.data)));
};
