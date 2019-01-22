import React from 'react'
import { Provider } from 'react-redux'
import Card from './card/Card'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" component={Card} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default Root