const defaultState = [{
  }]
  
  const addData = (state = defaultState, action) => {
      console.log(action)
    switch (action.type) {
      case 'Save': return [
        ...state,
        {
          data: action.data
        }
      ]
      default: return [
        ...state
      ]
    }
  }
  
  export default addData