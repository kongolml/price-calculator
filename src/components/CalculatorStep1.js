import React from 'react'


import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Slider from 'material-ui/Slider'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'


import store from '../../redux/store'
import updateStore from '../../redux/action'


export default class CalculatorStep1 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            location: '',
            peopleInTeam: 1,
            projectPeriod: '',
            wantToStart: ''
        }
    }

    handleLocation(event, index, value) {
        this.setState({
            location: value
        })

        setTimeout(() => {
            // update store:
            store.dispatch(updateStore(this.state))
        }, 1000)
    }

    teamSlider(event, value) {
        this.setState({
            peopleInTeam: value
        })

        setTimeout(() => {
            // update store:
            store.dispatch(updateStore(this.state))
        }, 1000)
    }

    handleProjectPeriod(event, index, value) {
        this.setState({
            projectPeriod: value
        })

        setTimeout(() => {
            // update store:
            store.dispatch(updateStore(this.state))
        }, 1000)
    }

    handleWantToStart(event, value) {
        this.setState({
            wantToStart: value
        })

        setTimeout(() => {
            // update store:
            store.dispatch(updateStore(this.state))
        }, 1000)
        
    }


    componentWillMount() {
        if( store.getState() ) {
            var storeState = store.getState()
            storeState = storeState[storeState.length - 1]

            // this.setState(storeState)
            // console.log(storeState)
            this.setState(storeState.formData)
            // for(var key in storeState.formData) {
            //     this.setState({
            //         key: storeState.formData[key]
            //     })
            // }
        }
    }


    render() {
        return (
            <div>
                <div className="field-group">
                    <p className="field-label">What is your location?</p>

                    <SelectField
                        value={this.state.location}
                        onChange={this.handleLocation.bind(this)}
                        className="field-select"
                    >
                        <MenuItem value="Ukraine" primaryText="Ukraine" />
                        <MenuItem value="Poland" primaryText="Poland" />
                        <MenuItem value="Spain" primaryText="Spain" />
                    </SelectField>
                </div>


                <div className="field-group">
                    <label htmlFor="location-slider">Number of people in the team: 1-40</label>

                    <Slider
                        name="location-slider"
                        defaultValue={16}
                        step={1}
                        min={1}
                        max={40}
                        onChange={this.teamSlider.bind(this)}
                        value={this.state.peopleInTeam}
                    />
                </div>


                <div className="field-group">
                    <p className="field-label">Project period</p>

                    <SelectField
                        value={this.state.projectPeriod}
                        onChange={this.handleProjectPeriod.bind(this)}
                        className="field-select"
                        value={this.state.projectPeriod}
                    >

                        <MenuItem value={1} primaryText="Less than 3 month" />
                        <MenuItem value={2} primaryText="More than 3 month" />
                        <MenuItem value={3} primaryText="Don't know yet" />
                    </SelectField>
                </div>


                <div className="field-group">
                    <p className="field-label">When you are going to start?</p>
                    <RadioButtonGroup
                        name="wantToStart"
                        onChange={this.handleWantToStart.bind(this)}
                        valueSelected={this.state.wantToStart}
                    >
                        <RadioButton
                            value="less_3_month"
                            label="Less than 3 month"
                            style={{ display: 'inline-block', width: '200px' }}
                        />
                        <RadioButton
                            value="more_3_month"
                            label="More than 3 month"
                            style={{ display: 'inline-block', width: '200px' }}
                        />
                        <RadioButton
                            value="unknown_yet"
                            label="Don't know yet"
                            style={{ display: 'inline-block', width: '200px' }}
                        />
                    </RadioButtonGroup>
                </div>
            </div>
        )
    }
}