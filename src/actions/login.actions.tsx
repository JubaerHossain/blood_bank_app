import {
    LOADING
  } from '../action-types/login.types';
  import { Dispatch } from 'redux';
  import { setAppState } from './app-state.actions';
  import { SHOPPER } from '../constants/types';


  import { Credential } from '../models/credential';
  import axios from '../utils/axios';
  
  export const setLoading = () => ({
    type: LOADING,
  });
  
  export const loginAction = async (dispatch: Dispatch<any>, credential: Credential) => {
    dispatch(setLoading());
    const response = await axios.post('/api/auth/login', credential);
    setAppState(dispatch, SHOPPER);
    return response.data;
  };
  