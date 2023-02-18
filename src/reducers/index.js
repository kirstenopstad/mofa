// import reducers
import dummyReducer from './dummy_reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  exhibitions: dummyReducer,
  // e.g. postList: postListReducer,
})

export default rootReducer