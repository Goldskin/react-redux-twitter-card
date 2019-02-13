import { combineReducers } from 'redux';
import { cards } from './card';
import { users } from './user';

export default combineReducers({
    cards, users
})