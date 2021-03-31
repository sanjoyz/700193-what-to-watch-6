import {NameSpace} from '../root-reducer';

export const getFilms = (state) => state[NameSpace.DATA].films;
export const getDataLoadStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getPromoFilm = (state) => state[NameSpace.DATA].promoFilm;
export const getFilmReviews = (state) => state[NameSpace.DATA].reviews;


