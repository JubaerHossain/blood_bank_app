import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';

import SendOTP from './send-otp';
import VerifyOTP from './verify-otp';
import { verifyOTPAction } from '../../../actions/profile.actions';

const Login = ({ navigation, onSubmit }) => {
  const dispatch = useDispatch();
  const [screen, setScreen] = useState(1);

  const sendOTPForm = values => {
    setScreen(2);
  };

  const verifyOTPForm = values => {
    verifyOTPAction(dispatch, values);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {screen == 1 && <SendOTP navigation={navigation} onSubmit={sendOTPForm} />}
      {screen == 2 && <VerifyOTP navigation={navigation} onSubmit={verifyOTPForm} />}
    </>
  );
};

export default Login;
