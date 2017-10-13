import React from 'react'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import ActionDone from 'material-ui/svg-icons/action/done'


import store from '../../redux/store'
import { updateDevelopersInfo } from '../../redux/action'



class Developer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            "developerID": null,
            "level": null,
            "type": null,
            "skill": null
        }
    }


    componentWillMount() {
        var storage = store.getState()
        var developerInStorage = 'developer-' + this.props.developerid

        if( storage ) {
            if( developerInStorage in storage ) {
                var developerInfoFromStorage = storage[developerInStorage][0]
                this.setState(developerInfoFromStorage)
            }
        }
    }


    handleDeveloperLevel(event, index, value) {
        this.setState({
            level: value,
            developerID: this.props.developerid
        })

        setTimeout(() => {
            store.dispatch(updateDevelopersInfo(this.state, this.state.developerID))
        }, 500)
    }


    handleDeveloperType(event, index, value) {
        this.setState({
            type: value
        })

        setTimeout(() => {
            store.dispatch(updateDevelopersInfo(this.state, this.state.developerID))
        }, 500)
    }


    handleDeveloperSkill(event, index, value) {
        this.setState({
            skill: value
        })

        setTimeout(() => {
            store.dispatch(updateDevelopersInfo(this.state, this.state.developerID))
        }, 500)
    }



    render() {
        return (
            <div className="row" style={{marginTop: '15px'}}>
                <div className="group-item col-xs-12 col-sm-4">
                    <p className="field-label">Level *</p>

                    <SelectField
                        style={{maxWidth: '100%'}}
                        onChange={this.handleDeveloperLevel.bind(this)}
                        value={this.state.level}
                        developerid={this.props.id}
                        underlineStyle={{borderColor: 'black'}}
                        iconStyle={{fill: '#1b75bc'}}
                    >
                        {
                            window.priceCalculatorData &&

                                window.priceCalculatorData.levels.map((level, index) => {
                                    return (
                                        <MenuItem 
                                            key={index}
                                            value={level}
                                            primaryText={level}
                                        />
                                    )
                                })
                        }
                    </SelectField>
                </div>

                <div className="group-item col-xs-12 col-sm-4">
                    <p className="field-label">Type</p>

                    <SelectField
                        style={{maxWidth: '100%'}}
                        onChange={this.handleDeveloperType.bind(this)}
                        value={this.state.type}
                        multiple={true}
                        developerid={this.props.id}
                        underlineStyle={{borderColor: 'black'}}
                        iconStyle={{fill: '#1b75bc'}}
                    >
                        {
                            window.priceCalculatorData &&

                                window.priceCalculatorData.types.map((type, index) => {
                                    return (
                                        <MenuItem 
                                            key={index}
                                            value={type}
                                            primaryText={type}
                                        />
                                    )
                                })
                        }

                        <button className="multiselect-confirm">
                            <ActionDone color={'white'} />
                        </button>

                    </SelectField>
                </div>

                <div className="group-item col-xs-12 col-sm-4">
                    <p className="field-label">Skill</p>

                    <SelectField
                        style={{maxWidth: '100%'}}
                        onChange={this.handleDeveloperSkill.bind(this)}
                        value={this.state.skill}
                        multiple={true}
                        developerid={this.props.id}
                        underlineStyle={{borderColor: 'black'}}
                        iconStyle={{fill: '#1b75bc'}}
                    >
                        {
                            window.priceCalculatorData &&

                                window.priceCalculatorData.skills.map((skill, index) => {
                                    return (
                                        <MenuItem 
                                            key={index}
                                            value={skill}
                                            primaryText={skill}
                                        />
                                    )
                                })
                        }

                        <button className="multiselect-confirm">
                            <ActionDone color={'white'} />
                        </button>

                    </SelectField>
                </div>
            </div>
        )
    }
}



export default class CalculatorStep2 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            peopleNeeded: 1
        }
    }
    

    componentWillMount() {
        if( store.getState() ) {
            var developers = [],
                latestStore = store.getState().projectInfo[store.getState().projectInfo.length - 1]

            if( latestStore != null ) {
                for(var i=0; i<latestStore.peopleInTeam; i++) {
                    developers.push({
                        "level": null,
                        "type": null,
                        "skill": null
                    })
                }

                this.setState({
                    peopleNeeded: latestStore.peopleInTeam
                })
            }            
        }
    }



    render() {
        var developersAdded = []
        for(var i=0; i<this.state.peopleNeeded; i++) {
            developersAdded.push(<Developer key={'developer-' + i} developerid={i} />)
        }

        return (
            <div style={{maxHeight: '500px', overflowY: 'auto', overflowX: 'hidden'}}>
                {
                    developersAdded.map(function(developer, index) {
                        return developer
                    })
                }
            </div>
        )
    }
}
