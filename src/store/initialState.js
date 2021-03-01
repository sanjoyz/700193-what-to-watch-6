import {AuthorizationStatus} from '../const';
const initState = {
  genre: `All genres`,
  films: [],
  MOVIE_CARD_DEFAULT_COUNT: 20,
  promoFilm: {},
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH
};
export default initState;
