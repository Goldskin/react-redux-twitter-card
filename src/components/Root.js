import React from 'react'
import { Provider } from 'react-redux'
import CardList from '../containers/card-list/Card-list'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Root = ({ store }) => {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" component={CardList} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default Root