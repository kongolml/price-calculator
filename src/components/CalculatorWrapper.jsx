require('../styles/styles.scss')

import React from 'react'

import CalculatorSteps from './CalculatorSteps.jsx'


export default class CalculatorWrapper extends React.Component {
    render() {
        return(
            <div className="calculator-wrapper">
                <h1 className="on-center">Spend few minutes on making your perfect team, we will do the rest!</h1>
                <CalculatorSteps />
            </div>
        )
    }
}