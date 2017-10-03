require('../styles/styles.scss')

import React from 'react'
import { Provider, connect } from 'react-redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import CalculatorSteps from './CalculatorSteps'

import store from '../../redux/store'






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
                <MuiThemeProvider>
                    <CalculatorSteps />
                </MuiThemeProvider>
            </div>
        )
    }
}



export default connect(mapStateToProps)(CalculatorWrapper)