export const setFormData = 'setFormData'


function updateStore(location) {
    return {
        type: setFormData,
        location
    }
}


export default updateStore