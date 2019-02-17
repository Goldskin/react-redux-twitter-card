import { combineReducers } from 'redux';
import { cards } from './card';
import { users } from './user';
import { likes } from './like';

export default combineReducers({
    cards, users, likes
})