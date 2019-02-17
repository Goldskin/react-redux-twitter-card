import ACTIONS from '../actions-type/like'
import v4 from 'uuid/v4'
export const likes   = (state = [], action) => {
    switch (action.type) {
        case ACTIONS.LIKE.CREATE:
            return [
                ...state,
                {
                    id: action.id || v4(),
                    userId: action.userId,
                    cardId: action.cardId,
                }
            ]
        case ACTIONS.LIKE.REMOVE:
            let index = state.findIndex(like => like.id === action.id)
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1, state.length)
            ]
        default:
            return state
    }
}
