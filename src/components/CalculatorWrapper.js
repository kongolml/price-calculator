require('../styles/styles.scss')

import React from 'react'
import { Provider, connect } from 'react-redux'
import store from '../../redux/store'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import CalculatorSteps from './CalculatorSteps'

const muiTheme = getMuiTheme({
    slider: {
        handleFillColor: '#1b75bc',
        trackColor: '#d8d8d8',
        trackColorSelected: '#d8d8d8',
        trackSize: 4,
        handleSize: 12,
        handleColorZero: '#f3f3f4',
        selectionColor: '#1b75bc'
    },
    radioButton: {
        borderColor: 'black',
        checkedColor: '#1b75bc',
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
                <div className="container">
                    <div className="col-xs-12 col-sm-10 col-sm-offset-1">
                        <h1 className="on-center">Spend few minutes on making your perfect team, we will do the rest!</h1>

                        <MuiThemeProvider muiTheme={muiTheme}>
                            <CalculatorSteps />
                        </MuiThemeProvider>

                    </div>
                </div>
            </div>
        )
    }
}



export default connect(mapStateToProps)(CalculatorWrapper)