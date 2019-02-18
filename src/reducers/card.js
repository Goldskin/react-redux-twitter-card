import ACTIONS from '../actions-type/card'
import v4 from 'uuid/v4'
export const cards = (state = [], action) => {
    let index
    switch (action.type) {
        case ACTIONS.CARD.CREATE:
            return [
                ...state,
                {
                    id: action.id || v4(),
                    like: 0,
                    userLike: action.userLike || false
                }
            ]
        case ACTIONS.CARD.LIKE_INCREMENT:
        index = state.findIndex(elem => elem.id === action.id)
            return [
                ...state.slice(0, index),
                {
                    ...state[index],
                    like: state[index].like + 1
                },
                ...state.slice(index + 1, state.length)
            ]
        case ACTIONS.CARD.LIKE_TOGGLE:
            index = state.findIndex(elem => elem.id === action.id)
            return [
                ...state.slice(0, index),
                {
                    ...state[index],
                    like: state[index].userLike ? state[index].like - 1 : state[index].like + 1,
                    userLike: !state[index].userLike
                },
                ...state.slice(index + 1, state.length)
            ]
        case ACTIONS.CARD.LIKE_DECREMENT:
            index = state.findIndex(elem => elem.id === action.id)
            return [
                ...state.slice(0, index),
                {
                    ...state[index],
                    like: state[index].like - 1
                },
                ...state.slice(index + 1, state.length)
            ]
        case ACTIONS.CARD.DELETE:
            index = state.findIndex(elem => elem.id === action.id)
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1, state.length)
            ]
        default:
            return state
    }
}
