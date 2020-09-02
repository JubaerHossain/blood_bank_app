import {
  LOADING,
  CREATE_APP_STATE,
  CREATE_APP_STATE_FAILED,
  GET_APP_STATE,
  GET_APP_STATE_FAILED,
} from '../action-types/app-state.type';

import {SHOPPER, BRAND} from '../constants/types';

const initialState = {
  appState: SHOPPER,
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
    case CREATE_APP_STATE:
      return {
        ...state,
        isLoading: false,
        appState: payload,
      };
    case CREATE_APP_STATE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case GET_APP_STATE:
      return {
        ...state,
        isLoading: false,
        appState: payload,
      };
    case GET_APP_STATE_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
}
