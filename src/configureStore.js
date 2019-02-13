import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import v4 from 'uuid'

// const typicalMiddleware = store => next => action => next(action)

export default () => {
    const initialState = {}
    initialState.users = [
        { id: v4(), name: 'Charles Strube', alias: 'goldskin' },
        { id: v4(), name: 'Ana Maria', alias: 'ananas' },
    ]
    initialState.cards = [
        { id: v4(), like: 0, user: initialState.users[0].id},
        { id: v4(), like: 2, user: initialState.users[1].id}
    ]


    const middlewares = [promise, thunk]
    const composeEnhancers =
        typeof window === 'object' &&
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger())
    }

    const enhancer = composeEnhancers(
        applyMiddleware(...middlewares),
    )

    return createStore(
        rootReducer,
        initialState,
        enhancer
    )
}
