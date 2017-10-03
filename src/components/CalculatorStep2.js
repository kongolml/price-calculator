import React from 'react'

import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'


export default class CalculatorStep2 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }




    render() {
        return (
            <div>
                <div className="row">
                    <div className="group-item col-xs-12 col-sm-4">
                        <p className="field-label">Level</p>

                        <SelectField
                            style={{maxWidth: '100%'}}
                        >
                            <MenuItem value={1} primaryText="Level 1" />
                            <MenuItem value={2} primaryText="Level 2" />
                            <MenuItem value={3} primaryText="Level 3" />
                        </SelectField>
                    </div>

                    <div className="group-item col-xs-12 col-sm-4">
                        <p className="field-label">Type</p>

                        <SelectField
                            style={{maxWidth: '100%'}}
                        >
                            <MenuItem value={1} primaryText="Type 1" />
                            <MenuItem value={2} primaryText="Type 2" />
                            <MenuItem value={3} primaryText="Type 3" />
                        </SelectField>
                    </div>

                    <div className="group-item col-xs-12 col-sm-4">
                        <p className="field-label">Skill</p>

                        <SelectField
                            style={{maxWidth: '100%'}}
                        >
                            <MenuItem value={1} primaryText="Skill 1" />
                            <MenuItem value={2} primaryText="Skill 2" />
                            <MenuItem value={3} primaryText="Skill 3" />
                        </SelectField>
                    </div>
                </div>
            </div>
        )
    }
}
