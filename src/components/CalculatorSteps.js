import React from 'react'



import CalculatorStep1 from './CalculatorStep1'
import CalculatorStep2 from './CalculatorStep2'

import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import {
	Step,
	Stepper,
	StepLabel,
} from 'material-ui/Stepper'
import ArrowForwardIcon from 'material-ui/svg-icons/navigation/arrow-forward'




export default class CalculatorSteps extends React.Component {
	constructor(props) {
		super(props)

		this.handleNext = this.handleNext.bind(this)
		this.handlePrev = this.handlePrev.bind(this)

		this.state = {
			stepIndex: 0
		}
	}


	getStepContent(stepIndex) {
		switch (stepIndex) {
			case 0:
				return (
					<CalculatorStep1 />
				)

			case 1:
				return (
					<CalculatorStep2 />
				)

			case 2:
				return (
					<p>
					{'step 3'}
					</p>
				)
		}
	}

	handleNext() {
		const {stepIndex} = this.state;

		if (stepIndex < 2) {
			this.setState({stepIndex: stepIndex + 1});
		}
	}

	handlePrev() {
		const {stepIndex} = this.state;

		if (stepIndex > 0) {
			this.setState({stepIndex: stepIndex - 1});
		}
	}

	render() {
		const {stepIndex} = this.state;

		return (
			<div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
				<Stepper activeStep={stepIndex} connector={<ArrowForwardIcon />}>
					<Step>
						<StepLabel>Configurate project</StepLabel>
						</Step>

					<Step>
						<StepLabel>Build the team</StepLabel>
					</Step>

					<Step>
						<StepLabel>Get a price!</StepLabel>
					</Step>
				</Stepper>

				{this.getStepContent(stepIndex)}

				<div style={{marginTop: 24, marginBottom: 12}}>
					<FlatButton
						label="Back"
						disabled={stepIndex === 0}
						onClick={this.handlePrev}
						style={{marginRight: 12}}
					/>
					<RaisedButton
						label={stepIndex === 2 ? 'Finish' : 'Next'}
						primary={true}
						onClick={this.handleNext}
					/>
				</div>
			</div>
			);
	}
}
