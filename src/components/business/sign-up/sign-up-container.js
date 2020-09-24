import React from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';

import SignForm from './sign-up';
import {createUserAction} from '../../../actions/sign_up.actions';
import {USER} from '../../../constants/types';

const SignUp = ({navigation, onSubmit}) => {
  const dispatch = useDispatch();

  const submittedValues = values => {
    console.log(values);
    createUserAction(dispatch, values);
    navigation.navigate('PROFILE');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SignForm navigation={navigation} onSubmit={submittedValues} />
    </>
  );
};

export default SignUp;
