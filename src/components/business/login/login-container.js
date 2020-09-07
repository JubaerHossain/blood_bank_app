import React from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';
import {loginAction} from '../../../actions/login.actions'
import LoginForm from './login';
import AsyncStorage from '@react-native-community/async-storage';
import {TOKEN} from '../../../constants/types';

const Login = ({navigation, onSubmit}) => {
  const dispatch = useDispatch();

  const submittedValues = async values => {
    console.log(values);
    const response = await  loginAction(dispatch, values);
    await AsyncStorage.setItem(TOKEN, response.token);
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
