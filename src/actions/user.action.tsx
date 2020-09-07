import {
    LOADING,
    GET_USER,
    GET_FAIL_USER,
  } from '../action-types/user.type';
  import { Dispatch } from 'redux';

  import axios from '../utils/axios';
  
  export const setLoading = () => ({

    type: LOADING,

  });

  export const getUser = (user:any) => ({

    type: GET_USER,
    payload:user

  });

  export const getUserFail = (user:any) => ({

    type: GET_FAIL_USER,
    payload:user
    
  });
  
  export const getUserAction = async (dispatch: Dispatch<any>,id:any) => {

    try {

        dispatch(setLoading());
        const response = await axios.get(`/v1/api/user/${id}`);
        dispatch(getUser(response.data));
        return response.data;

    } catch (error) {

        dispatch(getUserFail(error));  
    }
  };