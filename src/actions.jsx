export const saveData = (data) => {
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

export const getData = () => (dispatch) => {
    fetch('http://localhost:8000/api/user/view', {
        method: 'get', 
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(response => response.json())
    .then((data) => {
          return dispatch(saveData(data.data))
    })
    .catch ((err) => {
        console.log('Error : ', err)
    })    
}