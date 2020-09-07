import {
  LOADING,
  CREATE_APP_STATE,
  CREATE_APP_STATE_FAILED,
} from '../action-types/app-state.type';
import { Dispatch } from 'redux';

export const setLoading = () => ({
  type: LOADING,
});

export const createAppState = (AppState: any) => ({
  type: CREATE_APP_STATE,
  payload: AppState,
});

export const createAppStateFailed = () => ({
  type: CREATE_APP_STATE_FAILED,
});

export const setAppState = async (dispatch: Dispatch<any>, AppState: any) => {
  dispatch(setLoading());
  
  dispatch(createAppState(AppState));
};
