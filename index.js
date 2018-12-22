import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { BrowserRouter as Router } from 'react-router-dom'
import rootReducer from './src/reducers'
import {getAllClouds} from './src/actions'
import cloudsData from './src/data'

import App from './src/containers/app'

const store = createStore(rootReducer);
store.dispatch(getAllClouds(cloudsData));

render(
    <Router>
        <App store={store}/>
    </Router>,
    document.getElementById('root')
)
