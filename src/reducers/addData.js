const defaultState = {data : []}
  
  const addData = (state = defaultState, action) => {
    switch (action.type) {
      case 'Save': return {
        ...state,
          data: action.data
      }
      default: return {...state}
    }
  }


  export const getUserData =  (state) => {
    return state.addData.data;
  }
  
  export default addData