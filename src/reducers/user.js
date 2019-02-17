import ACTIONS from '../actions-type/user';
import v4 from 'uuid/v4'
export const users = (state = [], action) => {
    let index
    switch (action.type) {
        case ACTIONS.USER.CREATE:
            return [
                ...state,
                {
                    id: action.id || v4(),
                    name: action.name,
                    alias: action.alias
                }
            ]
        case ACTIONS.USER.DELETE:
            index = state.findIndex(elem => elem.id === action.id)
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1, state.length)
            ]
        default:
            return state
    }
}

export const getUser = (state, id) => {
    return state.users[state.users.findIndex(user => user.id === id)]
}