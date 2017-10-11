import React from 'react'

import store from '../../redux/store'



export default class FinalStep extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            developers: [],
            projectInfo: {},
            clientEmail: ''
        }
    }

    componentWillMount() {
        var storage = store.getState(),
            reg = /(developer-)\d+/,
            developers = [],
            projectInfo = {},
            clientEmail = ''
            // storage = {"projectInfo":[{"location":"Ukraine","peopleInTeam":3,"projectPeriod":"less_3_month","wantToStart":"less_3_month"}],"clientEmail":[{"clientEmail":"asdf@asd.com"}],"developer-0":[{"developerID":0,"level":"level-1","type":["type-1","type-2"],"skill":["skill-1","skill-2","skill-3"]}],"developer-1":[{"developerID":1,"level":"level-2","type":["type-2"],"skill":null}],"developer-2":[{"developerID":2,"level":"level-3","type":null,"skill":["skill-3","skill-1"]}]}

        for(var key in storage) {
            if( reg.test(key) ) {
                developers.push(storage[key][0])        
            }
        }

        if( storage != null ) {
            if( storage.projectInfo != null ) {
                projectInfo = storage.projectInfo[0]
            }

            if( storage.clientEmail != null ) {
                clientEmail = storage.clientEmail[0].clientEmail
            }
        }

        this.setState({
            developers: developers,
            projectInfo: projectInfo,
            clientEmail: clientEmail
        })
    }

    render() {
        return (
            <div className="calculator-result">
                <table style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>
                    <caption style={{textAlign: 'center', marginTop: '25px'}}>Project info</caption>
                    <tbody>
                        <tr>
                            <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>Location</th>
                            <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>People needed</th>
                            <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>Project period</th>
                            <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>Want to start</th>
                            <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>Client Email</th>
                        </tr>
                        <tr>
                            <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>{this.state.projectInfo.location}</th>
                            <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>{this.state.projectInfo.peopleInTeam}</th>
                            <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>{this.state.projectInfo.projectPeriod}</th>
                            <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>{this.state.projectInfo.wantToStart}</th>
                            <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}><a href={"mailto:" + this.state.clientEmail}>{this.state.clientEmail}</a></th>
                        </tr>
                    </tbody>
                </table>


                <table style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>
                    <caption style={{textAlign: 'center', marginTop: '25px'}}>Developers</caption>
                    <tbody>
                        <tr>
                            <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>ID</th>
                            <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>Level</th>
                            <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>Skills</th>
                            <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>Type</th>
                        </tr>
                        {
                            this.state.developers.map((developer, index) => {
                                var devSkills, devType
                                developer.skill === null ? devSkills = 'Not selected' : devSkills = developer.skill.join(', ')
                                developer.type === null ? devType = 'Not selected' : devType = developer.type.join(', ')

                                return (
                                    <tr key={'developer-' + index}>
                                        <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>{developer.developerID}</th>
                                        <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>{developer.level}</th>
                                        <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>{devSkills}</th>
                                        <th style={{border: '1px solid #000', textAlign: 'center', padding: '4px'}}>{devType}</th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

