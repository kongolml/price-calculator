require('../styles/styles.scss')

import React from 'react'
import { Provider, connect } from 'react-redux'
import store from '../../redux/store'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import CalculatorSteps from './CalculatorSteps'

const muiTheme = getMuiTheme({
  slider: {
    selectionColor: 'linear-gradient(to right, #1e5799 0%,#7db9e8 100%)',
    handleFillColor: 'green',
    trackColor: '#d8d8d8',
    trackSize: 4
  }
});


function mapStateToProps(state) {
    var newState = {}

    if( state !=  null ) {
        newState = {
            showProductsTable: true,
            items: store.getState()
        }
    } else {
        newState = {
            showProductsTable: false,
            items: 0
        }
    }

    return newState
}


class CalculatorWrapper extends React.Component {
    render() {
        return(
            <div className="calculator-wrapper">
                <h1 className="on-center">Spend few minutes on making your perfect team, we will do the rest!</h1>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <CalculatorSteps />
                </MuiThemeProvider>
            </div>
        )
    }
}



export default connect(mapStateToProps)(CalculatorWrapper)