import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'

import store from './reducers'


ReactDOM.render(
    <Provider store={store}>
        <div className="app">
            <App/>
        </div>
    </Provider>,
    document.getElementById('root')
)

