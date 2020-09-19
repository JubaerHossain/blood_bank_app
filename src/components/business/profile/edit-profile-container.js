/* eslint-disable react-native/no-inline-styles */
import React, {useLayoutEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {reset} from 'redux-form';


import {withWhiteBackground} from '../../HOC/background';
import EditProfile from './edit-profile'


const SignUpBrand = ({navigation, onSubmit}) => {
  const dispatch = useDispatch();

  const [profilePicture, setProfilePicture] = useState(null);

  const submitValues = async (values) => {
    console.log(values);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <EditProfile 
      navigation={navigation} 
      onSubmit={submitValues}
      profilePicture={profilePicture}
      setProfilePicture={setProfilePicture}
      />
    </>
  );
};

export default withWhiteBackground(SignUpBrand);
