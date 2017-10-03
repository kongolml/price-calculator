import React from 'react'
import ReactDOM from 'react-dom'
import CalculatorWrapper from './components/CalculatorWrapper'


import { Provider } from 'react-redux'
import store from '../redux/store'



ReactDOM.render(
    <Provider store={store}>
        <CalculatorWrapper />
    </Provider>,
    document.getElementById('root')
)
