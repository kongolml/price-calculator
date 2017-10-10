import React from 'react'


import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Slider from 'material-ui/Slider'
// import Slider from 'material-ui-slider-label/Slider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

import AvFiberManualRecord from 'material-ui/svg-icons/av/fiber-manual-record'


import store from '../../redux/store'
import { updateProjectInfo } from '../../redux/action'


const sliderStyles = {
  subheader: {
    textTransform: 'capitalize',
  },
  labelStyleInner: {
    color: '#1b75bc',
    fontWeight: 'bold',
    positino: 'absolute'
  },
};

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
            store.dispatch(updateProjectInfo(this.state))
        }, 500)
    }

    teamSlider(event, value) {
        this.setState({
            peopleInTeam: value
        })

        setTimeout(() => {
            store.dispatch(updateProjectInfo(this.state))
        }, 500)
    }

    handleProjectPeriod(event, index, value) {
        this.setState({
            projectPeriod: value
        })

        setTimeout(() => {
            store.dispatch(updateProjectInfo(this.state))
        }, 500)
    }

    handleWantToStart(event, value) {
        this.setState({
            wantToStart: value
        })

        setTimeout(() => {
            store.dispatch(updateProjectInfo(this.state))
        }, 500)
        
    }


    componentWillMount() {
        if( store.getState() ) {
            var latestStore = store.getState().projectInfo[store.getState().projectInfo.length - 1]

            this.setState(latestStore)
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
                        underlineStyle={{borderColor: 'black'}}
                        iconStyle={{fill: '#1b75bc'}}
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
                        step={1}
                        min={1}
                        max={40}
                        onChange={this.teamSlider.bind(this)}
                        value={this.state.peopleInTeam}
                        defaultValue={1}
                        disableFocusRipple={true}
                        className="custom-slider"
                        // label={
                        //     <div style={sliderStyles.labelStyleInner}>
                        //         {this.state.peopleInTeam + 'ppl'}
                        //     </div>
                        // }
                    />

                    <div className="slider-vals-wrp flex">
                        <label>1 prsn</label>
                        <label>40 ppl</label>
                    </div>
                </div>


                <div className="field-group">
                    <p className="field-label">Project period</p>

                    <SelectField
                        value={this.state.projectPeriod}
                        onChange={this.handleProjectPeriod.bind(this)}
                        className="field-select"
                        value={this.state.projectPeriod}
                        underlineStyle={{borderColor: 'black'}}
                        iconStyle={{fill: '#1b75bc'}}
                    >

                        <MenuItem value="less_3_month" primaryText="Less than 3 month" />
                        <MenuItem value="more_3_month" primaryText="More than 3 month" />
                        <MenuItem value="unknown_yet" primaryText="Don't know yet" />
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
                            checkedIcon={<AvFiberManualRecord />}
                        />
                        <RadioButton
                            value="more_3_month"
                            label="More than 3 month"
                            style={{ display: 'inline-block', width: '200px' }}
                            checkedIcon={<AvFiberManualRecord />}
                        />
                        <RadioButton
                            value="unknown_yet"
                            label="Don't know yet"
                            style={{ display: 'inline-block', width: '200px' }}
                            checkedIcon={<AvFiberManualRecord />}
                        />
                    </RadioButtonGroup>
                </div>
            </div>
        )
    }
}