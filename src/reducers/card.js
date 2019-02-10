import ACTIONS from '../actions-type/cards';
export const cards = (state = [], action) => {
    let index
    switch (action.type) {
        case ACTIONS.CARD.CREATE:
            return [
                ...state,
                {
                    id: action.id,
                    like: 0
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