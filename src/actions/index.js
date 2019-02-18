import ACTIONS from '../actions-type/card';

export const addLike = (id) => (dispatch, getState) => dispatch({
    type: ACTIONS.CARD.LIKE_TOGGLE,
    id
})

export const removeLike = (id) => (dispatch, getState) => dispatch({
    type: ACTIONS.CARD.LIKE_DECREMENT,
    id
})
