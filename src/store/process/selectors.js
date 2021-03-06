import NameSpace from '../root-reducer';

export const getFilteredFilms = (state) => state[NameSpace.PROCESS].filteredFilms;
export const getGenre = (state) => state[NameSpace.PROCESS].genre;
