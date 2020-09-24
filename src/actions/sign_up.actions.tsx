import {
    LOADING,
    CREATE_USER,
    CREATE_USER_FAILED,
  } from '../action-types/user.type';
  import { Dispatch } from 'redux';
  import axios from '../utils/axios';
  export const setLoading = () => ({
    type: LOADING,
  });
  
  export const createUser = (User: any) => ({
    type: CREATE_USER,
    payload: User,
  });
  
  export const createUserFailed = () => ({
    type: CREATE_USER_FAILED,
  });
  
  export const createUserAction = async (dispatch: Dispatch<any>, User: any) => {
    dispatch(setLoading());
    console.log(User);
    let response = await axios.post('/api/v1/user/send-otp', User);

    console.log(response);
    return response.data;
    
  };
  