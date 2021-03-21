export const ActionType = {
  CHANGE_GENRE: `filter/changeGenre`,
  FILTER_FILMS: `filter/`,
  GET_FILMS_LIST: `data/getFilmsList`,
  GET_PROMO_FILM: `data/getPromoFilm`,
  GET_FILM_COMMENTS: `data/getFilmComments`,
  POST_REVIEW: `data/postFilmReview`,
  REQUIRE_AUTHORIZATION: `user/requireAuthorization`,
  REDIRECT_TO_ROUTE: `user/redirectToRoute`
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
  getFilmComments: (value) => ({
    type: ActionType.GET_FILM_COMMENTS,
    value
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
  })
};
