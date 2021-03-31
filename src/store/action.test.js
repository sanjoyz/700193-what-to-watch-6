import {
  ActionCreator,
  ActionType,
} from './action';

describe(`Action creators work correctly`, () => {
  it(`Action creator for changeGenre returns correct action`, () => {
    const genre = ``;
    const expectedAction = {
      type: ActionType.CHANGE_GENRE,
      value: genre
    };
    expect(ActionCreator.changeGenre(genre)).toEqual(expectedAction);
  });

  it(`Action creator for filterFilms returns correct action`, () => {
    const films = [];
    const expectedAction = {
      type: ActionType.FILTER_FILMS,
      value: films
    };
    expect(ActionCreator.filterFilms(films)).toEqual(expectedAction);
  });


  it(`Action creator for getFilmsList returns correct action`, () => {
    const films = [
      {"name": `Macbeth`, "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`, "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`, "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`, "background_color": `#F1E9CE`, "description": `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`, "rating": 3.3, "scores_count": 48798, "director": `Justin Kurzel`, "starring": [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`], "run_time": 113, "genre": `Drama`, "released": 2015, "id": 1, "is_favorite": false, "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`, "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
    ];
    const expectedAction = {
      type: ActionType.GET_FILMS_LIST,
      value: films
    };
    expect(ActionCreator.getFilmsList(films)).toEqual(expectedAction);
  });

  it(`Action creator for getPromoFilm returns correct action`, () => {
    const film = {"name": `Macbeth`, "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`, "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`, "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`, "background_color": `#F1E9CE`, "description": `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`, "rating": 3.3, "scores_count": 48798, "director": `Justin Kurzel`, "starring": [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`], "run_time": 113, "genre": `Drama`, "released": 2015, "id": 1, "is_favorite": false, "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`, "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`};
    const expectedAction = {
      type: ActionType.GET_PROMO_FILM,
      value: film
    };
    expect(ActionCreator.getPromoFilm(film)).toEqual(expectedAction);
  });
  it(`Action creator for getFilmReviews returns correct action`, () => {
    const comments = [{"id": 1, "user": {"id": 13, "name": `Zak`}, "rating": 1.4, "comment": `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`, "date": `2021-03-07T08:04:28.658Z`}, {"id": 2, "user": {"id": 17, "name": `Emely`}, "rating": 7.2, "comment": `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`, "date": `2021-02-22T08:04:28.658Z`}];
    const expectedAction = {
      type: ActionType.GET_FILM_REVIEWS,
      value: comments
    };
    expect(ActionCreator.getFilmReviews(comments)).toEqual(expectedAction);
  });

  it(`Action creator for requireAuthorization returns correct action`, () => {
    const status = `AUTH`;
    const expectedAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      value: status
    };
    expect(ActionCreator.requireAuthorization(status)).toEqual(expectedAction);
  });

  it(`Action creator for redirectToRoute returns correct action`, () => {
    const route = `/`;
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      value: route
    };
    expect(ActionCreator.redirectToRoute(route)).toEqual(expectedAction);
  });

  it(`Action creator for pushReview returns correct action`, () => {
    const review = {"id": 1, "user": {"id": 13, "name": `Zak`}, "rating": 1.4, "comment": `This movie is just plain bad. There must be some big payola going round this awards season. Badly written, average acting at best, all the characters are unrelatable and inlikeable. 2 hours of my life wasted.`, "date": `2021-03-07T08:04:28.658Z`};
    const expectedAction = {
      type: ActionType.POST_REVIEW,
      value: review
    };
    expect(ActionCreator.pushReview(review)).toEqual(expectedAction);
  });

  it(`Action creator for postFavorite returns correct action`, () => {
    const film = {"name": `Macbeth`, "poster_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/poster/Macbeth.jpg`, "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/preview/macbeth.jpg`, "background_image": `https://assets.htmlacademy.ru/intensives/javascript-3/film/background/Macbeth.jpg`, "background_color": `#F1E9CE`, "description": `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`, "rating": 3.3, "scores_count": 48798, "director": `Justin Kurzel`, "starring": [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`], "run_time": 113, "genre": `Drama`, "released": 2015, "id": 1, "is_favorite": false, "video_link": `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`, "preview_video_link": `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`};
    const expectedAction = {
      type: ActionType.POST_FAVORITE,
      value: film
    };
    expect(ActionCreator.postFavorite(film)).toEqual(expectedAction);
  });

  it(`Action creator for getFavorite returns correct action`, () => {
    const films = [];
    const expectedAction = {
      type: ActionType.GET_FAVORITES,
      value: films
    };
    expect(ActionCreator.getFavorite(films)).toEqual(expectedAction);
  });


});


