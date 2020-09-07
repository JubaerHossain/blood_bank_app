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

      console.log('In user action');
        dispatch(setLoading());
        const response = await axios.get(`/v1/api/user/${id}`);
        dispatch(getUser(response.data));
        console.log('user'+response);
        
        return response.data;

    } catch (error) {

      console.log('In error ');
      console.log(error);

        dispatch(getUserFail(error));  
    }
  };