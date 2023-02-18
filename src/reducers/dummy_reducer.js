import * as c from '../actions/ActionTypes'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case c.ADD_TITLE:
      // copy state
      let newState = [...state]
      
      // return copy of state
      return newState;
    default:
      return state;
  }
}

export default reducer;