import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './src/reducers'
import {getAllClouds} from './src/actions'
import cloudsData from './src/data'

import App from './src/containers/app'

const store = createStore(rootReducer);
store.dispatch(getAllClouds(cloudsData));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
