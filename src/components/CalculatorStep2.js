import React from 'react'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'


import store from '../../redux/store'
import { updateProjectInfo, updateDevelopersInfo } from '../../redux/action'



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

    handleDeveloperLevel(event, index, value) {
        this.setState({
            level: value,
            developerID: this.props.developerid
        })

        setTimeout(() => {
            store.dispatch(updateDevelopersInfo(this.state))
        }, 500)
    }

    handleDeveloperType(event, index, value) {
        this.setState({
            type: value
        })

        setTimeout(() => {
            store.dispatch(updateDevelopersInfo(this.state))
        }, 500)
    }

    handleDeveloperSkill(event, index, value) {
        this.setState({
            skill: value
        })

        setTimeout(() => {
            store.dispatch(updateDevelopersInfo(this.state))
        }, 500)
    }


    render() {
        return (
            <div className="row">
                <div className="group-item col-xs-12 col-sm-4">
                    <p className="field-label">Level</p>

                    <SelectField
                        style={{maxWidth: '100%'}}
                        onChange={this.handleDeveloperLevel.bind(this)}
                        value={this.state.level}
                        developerid={this.props.id}
                    >
                        <MenuItem
                            value="level-1"
                            primaryText="Level 1"
                        />
                        <MenuItem
                            value="level-2"
                            primaryText="Level 2"
                        />
                        <MenuItem 
                            value="level-3"
                            primaryText="Level 3"
                        />
                    </SelectField>
                </div>

                <div className="group-item col-xs-12 col-sm-4">
                    <p className="field-label">Type</p>

                    <SelectField
                        style={{maxWidth: '100%'}}
                        onChange={this.handleDeveloperType.bind(this)}
                        value={this.state.type}
                        multiple={true}
                    >
                        <MenuItem value="type-1" primaryText="Type 1" />
                        <MenuItem value="type-2" primaryText="Type 2" />
                        <MenuItem value="type-3" primaryText="Type 3" />
                    </SelectField>
                </div>

                <div className="group-item col-xs-12 col-sm-4">
                    <p className="field-label">Skill</p>

                    <SelectField
                        style={{maxWidth: '100%'}}
                        onChange={this.handleDeveloperSkill.bind(this)}
                        value={this.state.skill}
                        multiple={true}
                    >
                        <MenuItem value="skill-1" primaryText="Skill 1" />
                        <MenuItem value="skill-2" primaryText="Skill 2" />
                        <MenuItem value="skill-3" primaryText="Skill 3" />
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



    render() {
        var developersAdded = []
        for(var i=0; i<this.state.peopleNeeded; i++) {
            developersAdded.push(<Developer key={'developer-' + i} developerid={'developer-' + i} />)
        }

        return (
            <div>
                {
                    developersAdded.map(function(developer, index) {
                        return developer
                    })
                }
            </div>
        )
    }
}