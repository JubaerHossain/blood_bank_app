/* eslint-disable react-native/no-inline-styles */
import React, {useLayoutEffect} from 'react';
import {Field, reduxForm} from 'redux-form';

import {Text, StatusBar, View} from 'react-native';
import {SvgXml} from 'react-native-svg';

import logo from '../../../assets/icons/logo';
import {withWhiteBackground} from '../../HOC/background';
import {IconPosition} from './style';

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
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {deviceRespectedSize} from '../../../utils/calcaulation';

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

const SignUp = ({navigation, handleSubmit, invalid}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{paddingTop: 39, paddingLeft: 17}}>
          <HeaderIcon xml={shared} padding={8} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  let passwordRef, confirmPasswordRef;

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <ScrollView>
        <IconPosition>
          <SvgXml xml={logo} height={54} width={54} />
        </IconPosition>
        <H2LoginAsOrangeText>Welcome to bss</H2LoginAsOrangeText>
        <View style={{marginTop: 254, marginLeft: 22, marginRight: 22}}>
          <Field
            name={'email'}
            component={TextInput}
            label="Email address"
            placeholder="Enter your email address"
            shape={TOP_ROUND}
            returnKeyType={NEXT}
            onSubmitEditing={() => passwordRef.focus()}
          />

          <Field
            name={'password'}
            component={TextInput}
            label="Password"
            placeholder="Enter your password"
            shape={NO_ROUND}
            returnKeyType={NEXT}
            onRef={ref => (passwordRef = ref)}
            onSubmitEditing={() => confirmPasswordRef.focus()}
          />

          <Field
            name={'confirmPassword'}
            component={TextInput}
            label="Confirm password"
            placeholder="Re-type your password"
            shape={BOTTOM_ROUND}
            returnKeyType={GO}
            onRef={ref => (confirmPasswordRef = ref)}
            onSubmitEditing={handleSubmit}
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
          <TouchableOpacity
            style={{
              height: deviceRespectedSize(45),
              backgroundColor: 'rgb(255, 255, 255)',
              borderRadius: 4,
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: 'rgb(34,34,34)',
              marginTop: deviceRespectedSize(19),
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#ECEFF1',
                  height: deviceRespectedSize(16),
                  width: deviceRespectedSize(21),
                  justifyContent: 'center',
                  marginTop: deviceRespectedSize(5),
                  marginRight: deviceRespectedSize(76),
                }}>
                <Text
                  style={{
                    color: 'rgb(244, 67, 54)',
                    fontSize: deviceRespectedSize(20),
                    alignSelf: 'center',
                    fontWeight: 'bold',
                  }}>
                  M
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    color: 'rgb(34, 34, 34)',
                    alignSelf: 'center',
                    fontSize: deviceRespectedSize(15),
                    letterSpacing: -0.33,
                    paddingRight: deviceRespectedSize(76),
                    fontWeight: 'bold',
                  }}>
                  Sign up with Gmail
                </Text>
              </View>
              <View />
            </View>
          </TouchableOpacity>
          <View style={{marginBottom: 47, marginTop: 40}}>
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
