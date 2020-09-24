/* eslint-disable react-native/no-inline-styles */
import React, { useLayoutEffect } from 'react';
import { Field, reduxForm } from 'redux-form';

import { Text, StatusBar, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import logo from '../../../assets/icons/logo';
import { withWhiteBackground } from '../../HOC/background';
import { IconPosition } from './style';

import TextInput from '../../basic/inputs/input';
import {
  TOP_ROUND,
  GO,
  BOTTOM_ROUND,
  NEXT,
  NO_ROUND,
} from '../../../constants/types';
import validate from './validate';

import {
  HeaderIcon,
  DisableButton,
  ButtonTextWhite,
  H2LoginAsOrangeText,
  PrimaryButton,
} from '../../basic/index';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { deviceRespectedSize } from '../../../utils/calcaulation';
import { Header } from '../../composite/header';

const shared = `
<svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>cross2</title>
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="icon_cross/black" transform="translate(-7.000000, -7.000000)" fill="#222222">
            <path d="M14.8571429,5 L14.857,13.142 L23,13.1428571 L23,14.8571429 L14.857,14.857 L14.8571429,23 L13.1428571,23 L13.142,14.857 L5,14.8571429 L5,13.1428571 L13.142,13.142 L13.1428571,5 L14.8571429,5 Z" id="cross2" transform="translate(14.000000, 14.000000) rotate(-315.000000) translate(-14.000000, -14.000000) "></path>
        </g>
    </g>
</svg>
`;

const SignUp = ({ navigation, handleSubmit, invalid }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{ paddingTop: 39, paddingLeft: 17 }}>
          <HeaderIcon xml={shared} padding={8} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  let passwordRef, confirmPasswordRef;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Header navigation={navigation} />

      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <H2LoginAsOrangeText>Welcome to bss</H2LoginAsOrangeText>
        </View>
        <View style={{ marginTop: 180, marginLeft: 22, marginRight: 22 }}>
        
          <Field
            name={'mobile_one'}
            component={TextInput}
            label="Mobile Number"
            placeholder="Enter your mobile number"
            shape={TOP_ROUND}
            returnKeyType={NEXT}
            onSubmitEditing={() => passwordRef.focus()}
          />

          <Text
            style={{
              fontSize: 15,
              lineHeight: 20,
              letterSpacing: -0.13,
              color: 'rgb(72, 72,72)',
              marginTop: 13,
              marginBottom: 19,
            }}>
            We will mail you to confirm your email address.
          </Text>

          {!invalid ? (
            <PrimaryButton onPress={handleSubmit}>
              <ButtonTextWhite>Sign Up</ButtonTextWhite>
            </PrimaryButton>
          ) : (
              <DisableButton>
                <ButtonTextWhite>Sign Up</ButtonTextWhite>
              </DisableButton>
            )}

          <View
            style={{
              justifyContent: 'center',
              marginTop: 19,
            }}>
            <Text
              style={{
                color: 'rgb(72, 72, 72)',
                alignSelf: 'center',
                fontSize: 18,
                letterSpacing: -0.13,
              }}>
              Or
            </Text>
          </View>
          <View style={{ marginBottom: 47, marginTop: 10 }}>
            <Text
              style={{
                color: 'rgb(34,34,34)',
                letterSpacing: -0.33,
                fontSize: 16,
              }}>
              {' '}
              Already have account?{' '}
              <Text
                onPress={() => navigation.navigate('login')}
                style={{
                  color: 'rgb(34,34,34)',
                  letterSpacing: -0.33,
                  fontSize: 16,
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}>
                Log in
              </Text>{' '}
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default reduxForm({
  form: 'SignUp',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(withWhiteBackground(SignUp));
