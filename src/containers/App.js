import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import CloudApp from './CloudApp'
import Item from '../containers/Item'


const App = ({store}) => (
    <Provider store={store}>
        <>
            <Route exact path="/" component={CloudApp}/>
            <Route path="/:itemId" component={Item}/>
        </>
    </Provider>
)

App.propTypes = {
    store: PropTypes.object
}

export default App

