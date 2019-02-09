export const likeCounter = (state = 0, action) => {
    console.log(state)
    switch (action.type) {
        case 'LIKE_INCREMENT':
            return state + 1
        case 'LIKE_DECREMENT':
            return state - 1
        default:
            return state
    }
}