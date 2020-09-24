import {
    LOADING,
    CREATE_USER,
    CREATE_USER_FAILED,
    GET_USER,
    GET_USER_FAILED,
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
      case GET_USER_FAILED:
        return {
          ...state,
          isLoading: false,
          error: payload,
        };
        case CREATE_USER:
          return {
            ...state,
            isLoading: false,
            user: payload,
          };
        case CREATE_USER_FAILED:
          return {
            ...state,
            isLoading: false,
            error: payload,
          };
      default:
        return state;
    }
  }
  