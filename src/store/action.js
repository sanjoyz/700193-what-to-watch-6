export const ActionType = {
  CHANGE_GENRE: `filter/changeGenre`,
  GET_FILMS_LIST: `filter/getFilmList`
};

export const ActionCreator = {
  changeGenre: (value) => ({
    type: ActionType.CHANGE_GENRE,
    value
  }),
  getFilmList: (value) => ({
    type: ActionType.GET_FILMS_LIST,
    value
  })
};
