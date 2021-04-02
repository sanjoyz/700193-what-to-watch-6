export const ActionType = {
  CHANGE_GENRE: `filter/changeGenre`,
  FILTER_FILMS: `filter/`,
  GET_FILMS_LIST: `data/getFilmsList`,
  GET_PROMO_FILM: `data/getPromoFilm`,
  GET_FILM_REVIEWS: `data/getFilmReviews`,
  GET_FAVORITES: `data/getFavorites`,
  POST_REVIEW: `data/postFilmReview`,
  POST_FAVORITE: `data/postFavorite`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`,
  GET_USER: `user/getUser`,
};

export const ActionCreator = {
  changeGenre: (value) => ({
    type: ActionType.CHANGE_GENRE,
    value
  }),
  filterFilms: (value) => ({
    type: ActionType.FILTER_FILMS,
    value
  }),
  getFilmsList: (value) => ({
    type: ActionType.GET_FILMS_LIST,
    value
  }),
  getPromoFilm: (value) => ({
    type: ActionType.GET_PROMO_FILM,
    value
  }),
  getFilmReviews: (value) => ({
    type: ActionType.GET_FILM_REVIEWS,
    value
  }),
  getUser: (user) => ({
    type: ActionType.GET_USER,
    value: user
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    value: status,
  }),
  redirectToRoute: (route) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    value: route
  }),
  pushReview: (review) => ({
    type: ActionType.POST_REVIEW,
    value: review
  }),
  postFavorite: (film) => ({
    type: ActionType.POST_FAVORITE,
    value: film
  }),
  getFavorite: (favorites) => ({
    type: ActionType.GET_FAVORITES,
    value: favorites
  }),
};
