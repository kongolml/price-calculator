import { setFormData } from './action'


function modifyStore(state = [], action) {
    if( action.type === setFormData ) {
        return [
            ...state,
            {   
                formData: action.location
            }
        ]
    }
}


export default modifyStore