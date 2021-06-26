import React, {useState} from 'react';
import {Alert, StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';

import SendOTP from './send-otp';
import VerifyOTP from './verify-otp';
import {verifyOTPAction} from '../../../actions/profile.actions';
import {sendOTPAction, loginAction} from '../../../actions/login.actions';

const Login = ({navigation, onSubmit}) => {
  const dispatch = useDispatch();
  const [screen, setScreen] = useState(1);

  const sendOTPForm = async values => {
    try {
      const {message} = await sendOTPAction({mobile_one: values.mobile_one, role: 5});
      setScreen(2);
      Alert.alert('OTP', message)
    } catch (error) {}
  };

  const verifyOTPForm = async values => {
    const { mobile_one, otp } = values
    loginAction({dispatch, mobile_one, otp})
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {screen == 1 && (
        <SendOTP navigation={navigation} onSubmit={sendOTPForm} />
      )}
      {screen == 2 && (
        <VerifyOTP navigation={navigation} onSubmit={verifyOTPForm} />
      )}
    </>
  );
};

export default Login;
