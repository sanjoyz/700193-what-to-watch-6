export const APIRoute = {
  FILMS: `/films`,
  PROMO_FILM: `/films/promo`,
  FAVORITE: `/favorite`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  COMMENTS: `/comments`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  MYLIST: `/mylist`,
  FILMS: `/films`,
  PLAYER: `/player`,
};

export const getTimeFromMins = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours + `h ` + minutes + `m`;
};

export const getSimilarFilms = (films, genre) => {
  return films.filter((film) => {
    return film.genre === genre;
  });
};

export const getFilmTextRating = (rating) => {
  let textRating = ``;
  switch (true) {
    case (rating < 3) :
      textRating = `Bad`;
      break;
    case (rating >= 3 && rating < 5):
      textRating = `Normal`;
      break;
    case (rating >= 5 && rating < 8):
      textRating = `Good`;
      break;
    case (rating >= 8 && rating < 10):
      textRating = `Very good`;
      break;
    case (rating === 10):
      textRating = `Awesome`;
      break;
    default:
      textRating = `Not enough rates`;
      break;
  }
  return textRating;
};

export const SHOW_FILMS_STEP = 8;
export const TEXT_AREA = {
  minLength: `50`,
  maxLength: `400`
};
