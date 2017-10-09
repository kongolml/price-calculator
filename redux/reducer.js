import { setProjectInfo, setDevelopersInfo, setClientEmail } from './action'
import { combineReducers } from 'redux'

const initialState = {
    projectInfo: {},
    clientEmail: ''
}


function modifyStore(state = initialState, action) {
    switch (action.type) {
        case setProjectInfo:
            return Object.assign({}, state, {
                projectInfo: [
                    ...state,
                    action.data
                ]
            })


        case setDevelopersInfo:
            return Object.assign({}, state, {
                ['developer-' + action.index]: [
                    ...state,
                    action.data
                ]
            })


        case setClientEmail:
            return Object.assign({}, state, {
                clientEmail: [
                    ...state,
                    action.data
                ]
            })
    }
}





export default modifyStore