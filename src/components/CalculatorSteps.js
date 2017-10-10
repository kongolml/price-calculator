import React from 'react'



import CalculatorStep1 from './CalculatorStep1'
import CalculatorStep2 from './CalculatorStep2'
import CalculatorStep3 from './CalculatorStep3'

import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import {
	Step,
	Stepper,
	StepLabel,
} from 'material-ui/Stepper'
import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right'




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
					<CalculatorStep3 />
				)
		}
	}

	getStepDescription(stepIndex) {
		switch (stepIndex) {
			case 0:
				return (
					<div>
						<p className="title">Configurate<br />project</p>
						<br /><br />
						<p>This stage allows you to pick up anumber of people in your team, and whereas your project is going to long/short termed, and of curse you can skip it  this step and just leace us your email address - we are going to contact you soon
						<br /><br />We promise. No spam!</p>
					</div>
				)

			case 1:
				return (
					<div>
						<p className="title">Build<br />the team</p>
						<br /><br />
						<p>This stage allows you to literally build your own perfect team you need for your project. If you got any issues or don’t know what person will fit your purpose best, leave your emaiul address  - we wil contact you soon
						<br /><br />We promise. No spam!</p>
					</div>
				)

			case 2:
				return (
					<div>
						<p className="title">Get<br />a price</p>
						<br /><br />
						<p>This is the last step of your journey, you are happy with initial draft of your team, and now it is is out turn to step in, just leave your email adress and we will contact you within 24 hours.
						<br /><br />We promise. No spam!</p>
					</div>
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
			<div style={{width: '100%', margin: 'auto', backgroundColor: 'white'}} className="calculator">

				<div className="row">
					<div className="col-xs-12 col-sm-9">

						<Stepper activeStep={stepIndex} connector={<NavigationChevronRight />} style={{backgroundColor: '#f6fafd', marginLeft: '-15px', marginRight: '-15px'}}>
							<Step>
								<StepLabel iconContainerStyle={{display: 'none'}} style={{textTransform: 'uppercase'}}>Configurate project</StepLabel>
							</Step>

							<Step>
								<StepLabel iconContainerStyle={{display: 'none'}} style={{textTransform: 'uppercase'}}>Build the team</StepLabel>
							</Step>

							<Step>
								<StepLabel iconContainerStyle={{display: 'none'}} style={{textTransform: 'uppercase'}}>Get a price!</StepLabel>
							</Step>
						</Stepper>

						{this.getStepContent(stepIndex)}

					</div>
					<div className="col-xs-12 col-sm-3 step-description-wrp">
						<div className="step-description">
							{this.getStepDescription(stepIndex)}

							<div style={{marginTop: 24, marginBottom: 12}}>
								<button
									className="nextStep"
									onClick={this.handleNext}
								>{stepIndex === 2 ? 'Send me the price' : 'Next step'}</button>
								<button
									className="prevStep"
									onClick={this.handlePrev}
								>{stepIndex >= 1 ? 'Previous step' : 'I don\'t have time'}</button>
							</div>

						</div>
					</div>

				</div>
			</div>
			);
	}
}
