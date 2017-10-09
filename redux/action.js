export const setProjectInfo = 'SET_PROJECT_INFO'
export const setDevelopersInfo = 'SET_DEVELOPERS_INFO'


export function updateProjectInfo(data) {
    return {
        type: setProjectInfo,
        data
    }
}


export function updateDevelopersInfo(data) {
    return {
        type: setDevelopersInfo,
        data
    }
}