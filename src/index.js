import React from 'react'
import ReactDOM from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import CalculatorWrapper from './components/CalculatorWrapper.jsx'


const App = () => (
  <MuiThemeProvider>
    <CalculatorWrapper />
  </MuiThemeProvider>
);


ReactDOM.render(
    <App />,
    document.getElementById('root')
);