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

export const SHOW_FILMS_STEP = 8;
