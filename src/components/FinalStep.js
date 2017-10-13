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
        }, () => {
            this.sendDataToPHP(this.state)
        })
    }


    sendDataToPHP(data) {
        // send final data to php file:
        var http = new XMLHttpRequest()
        var url = window.pluginData.pluginsURL + 'send-mail.php'

        http.open("POST", url, true)

        // Send the proper header information along with the request
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

        http.onreadystatechange = function() {
            //Call a function when the state changes.
            if(http.readyState == 4 && http.status == 200) {
                // console.info(http.responseText)
            }
        }
        http.send(JSON.stringify(data))
    }

    render() {
        return (

            <div style={{padding: '15px'}} className="final-result">
                <p style={{textAlign: 'center', fontSize: '24px', fontWeight: 'bold'}}>Thank you!</p>
                <p style={{textAlign: 'center'}}>We are working on your request and will contact you very soon</p>
            </div>
        )
    }
}

