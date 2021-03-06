import {combineReducers} from 'redux';
import {filmsData} from './films-data/films-data';
import {process} from './process/process';
import {user} from './user/user';

export const NameSpace = {
  DATA: `DATA`,
  FILMS: `FILMS`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.DATA]: filmsData,
  [NameSpace.FILMS]: process,
  [NameSpace.USER]: user,
});
