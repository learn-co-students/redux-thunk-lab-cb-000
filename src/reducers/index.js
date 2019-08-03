import { combineReducers } from 'redux';
import catsReducer from './petsReducer';

export default combineReducers({
  cats: catsReducer
});
