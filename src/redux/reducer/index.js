// import { combineReducers } from 'redux'
// import { type } from '../action/type';
import { type } from '../action';

const reducerData = (state, action) => {
  switch(action.type){
    case type.TOGGLE_MENU: 
      return {
        ...state,
        collapsed: action.collapsed
      }
    default: 
      return {...state}
  }
}

export default reducerData