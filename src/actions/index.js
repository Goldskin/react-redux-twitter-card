import ACTIONS from '../actions-type/cards';

export const addLike = () => ({
    type: ACTIONS.CARD.LIKE_INCREMENT
})

export const removeLike = () => ({
    type: ACTIONS.CARD.LIKE_DECREMENT
})
