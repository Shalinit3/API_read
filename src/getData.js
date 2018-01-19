export const getData = () => {
    fetch('http://localhost:8000/api/user/view', {
        method: 'get', 
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(response => response.json())
    .then((data) => {
          return(data.data)
    })
    .catch ((err) => {
        console.log('Error : ', err)
    })    
}
