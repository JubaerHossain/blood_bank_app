import {
    LOADING,GET_USER,GET_FAIL_USER
  } from '../action-types/user.type';
  
 
  
  const initialState = {
    user:null,
    isLoading: false,
    error: null,
  };
  
  export default function(state = initialState, action:any) {
    const {type, payload} = action;
  
    switch (type) {
      case LOADING:
        return {
          ...state,
          isLoading: true,
        };
      case GET_USER:
        return {
          ...state,
          isLoading: false,
          user: payload,
        };
      case GET_FAIL_USER:
        return {
          ...state,
          isLoading: false,
          error: payload,
        };
      default:
        return state;
    }
  }
  