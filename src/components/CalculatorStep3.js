import React from 'react'

import TextField from 'material-ui/TextField'


import store from '../../redux/store'
import { updateClientEmail } from '../../redux/action'




export default class CalculatorStep3 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            clientEmail: ''
        }
    }

    componentWillMount() {
        if( store.getState() ) {
            this.setState({
                // clientEmail: store.getState().clientEmail[0].clientEmail
            })
        }
    }

    handleClientEmail(event, newValue) {
        this.setState({
            clientEmail: newValue
        })

        setTimeout(() => {
            store.dispatch(updateClientEmail(this.state))
        }, 500)
    }


    render() {
        return (
            <div className="row">
                <div className="field-group">
                    <p className="field-label">Please enter your email address </p>

                    <TextField
                        hintText="Your email"
                        type="email"
                        name="client-email"
                        fullWidth={true}
                        onChange={this.handleClientEmail.bind(this)}
                        value={this.state.clientEmail}
                    />
                </div>
            </div>
        )
    }
}
