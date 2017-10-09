export const setProjectInfo = 'SET_PROJECT_INFO'
export const setDevelopersInfo = 'SET_DEVELOPERS_INFO'
export const setClientEmail = 'SET_CLIENT_EMAIL'


export function updateProjectInfo(data) {
    return {
        type: setProjectInfo,
        data
    }
}


export function updateDevelopersInfo(data, index) {
    return {
        type: setDevelopersInfo,
        data,
        index
    }
}


export function updateClientEmail(data) {
    return {
        type: setClientEmail,
        data,
    }
}