export const ActionType = {
  CHANGE_GENRE: `filter/changeGenre`,
  GET_FILMS_LIST: `data/getFilmsList`,
  GET_PROMO_FILM: `data/getPromoFilm`,
  FILTER_FILMS: `filter/`
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
  })
};
