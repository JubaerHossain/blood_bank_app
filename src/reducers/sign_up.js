import {
  LOADING,
  CREATE_USER,
  CREATE_USER_FAILED,
  GET_USER,
  GET_USER_FAILED,
} from '../action-types/sign_up.type';

import {USER} from '../constants/types';

const initialState = {
  appState: USER,
  isLoading: false,
  error: null,
};

export default function(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CREATE_USER:
      return {
        ...state,
        isLoading: false,
        appState: payload,
      };
    case CREATE_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case GET_USER:
      return {
        ...state,
        isLoading: false,
        appState: payload,
      };
    case GET_USER_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
}
