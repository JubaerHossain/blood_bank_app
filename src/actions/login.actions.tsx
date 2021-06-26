import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import {PROFILE, TOKEN} from '../constants/types';

import axios from '../utils/axios';
import {Dispatch} from 'redux';
import {
  setProfile,
  setProfileSuccess,
  setProfileFailure,
} from '../reducers/profile';

export const loginAction = async ({
  dispatch,
  mobile_one,
  otp,
}: {
  dispatch: Dispatch<any>;
  mobile_one: string;
  otp: string;
}) => {
  dispatch(setProfile());
  
  try {
    const {
      data: {token, user},
    } = await axios.post('/api/v1/user/login', {
      mobile_one,
      otp,
    });

    await AsyncStorage.setItem(TOKEN, token);
    await AsyncStorage.setItem(PROFILE, JSON.stringify(user));

    dispatch(setProfileSuccess(user));

    return user;
  } catch (error) {
    dispatch(setProfileFailure());
    Alert.alert(
      'Something went wrong!',
      'We are having trouble to contact with server. Please try again.',
    );
  }
};

export const sendOTPAction = async ({
  mobile_one,
  role,
}: {
  mobile_one: string;
  role: string;
}) => {
  try {
    const {data} = await axios.post('/api/v1/user/send-otp', {
      mobile_one,
      role,
    });
    return data;
  } catch (error) {
    Alert.alert(
      'Something went wrong!',
      'We are having trouble to contact with server. Please try again.',
    );
  }
};
