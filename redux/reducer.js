import { setProjectInfo, setDevelopersInfo } from './action'
import { combineReducers } from 'redux'

const initialState = {
    projectInfo: {},
    developers: [],
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
                developers: [
                    ...state,
                    action.data
                ]
            })
    }
}



export default modifyStore