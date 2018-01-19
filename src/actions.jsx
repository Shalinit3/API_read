import {getData} from './getData'
export const saveData = () => {
    const data = getData()
    return {
        data,
        type: 'Save'
    }
}

export const displayData = () => {
    return {
        type: 'Display'
    }
}