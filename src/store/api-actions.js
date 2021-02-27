import {APIRoute} from '../const';
import {ActionCreator} from './action';

export const fetchFilmsList = () => (dispatchEvent, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatchEvent(ActionCreator.getFilmsList(data)))
);

export const fetchPromoFilm = () => (dispatchEvent, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
      .then(({data}) => dispatchEvent(ActionCreator.getPromoFilm(data)))
);
