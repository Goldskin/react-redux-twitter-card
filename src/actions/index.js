import ACTIONS from '../actions-type/cards';

export const addLike = (id) => ({
    type: ACTIONS.CARD.LIKE_INCREMENT,
    id
})

export const removeLike = (id) => ({
    type: ACTIONS.CARD.LIKE_DECREMENT,
    id
})
