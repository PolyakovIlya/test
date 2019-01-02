import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import history from '../history'
import CloudApp from './CloudApp'
import Item from '../containers/Item'

const App = () => (
    <Router history={history}>
        <>
            <Route exact path="/" component={CloudApp}/>
            <Route path="/:itemId" component={Item}/>
        </>
    </Router>
)

App.propTypes = {
    store: PropTypes.object
}

export default connect()(App)

