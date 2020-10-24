import React from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';

import Settings from './settings';
import {setAppState} from '../../../actions/app-state.actions.tsx';
import {SHOPPER} from '../../../constants/types';

const SettingsContainer = ({navigation, onSubmit}) => {
  const dispatch = useDispatch();

  const submittedValues = values => {
    setAppState(dispatch, SHOPPER);
    navigation.navigate('PROFILE');
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Settings navigation={navigation}/>
    </>
  );
};

export default SettingsContainer;
