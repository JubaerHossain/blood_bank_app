import React from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';

import LoginForm from './login';
import {setAppState} from '../../../actions/app-state.actions.tsx';
import {SHOPPER} from '../../../constants/types';

const Login = ({navigation, onSubmit}) => {
  const dispatch = useDispatch();

  const submittedValues = values => {
    console.log(values);
    setAppState(dispatch, SHOPPER);
    navigation.navigate('PROFILE');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <LoginForm navigation={navigation} onSubmit={submittedValues} />
    </>
  );
};

export default Login;
