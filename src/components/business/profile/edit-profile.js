/* eslint-disable react-native/no-inline-styles */
import React, { useState, useLayoutEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Field, reduxForm } from 'redux-form';

import {
  BodyBold,
  SecondaryButton,
  H6,
  Link,
  RoundFloatingInput,
} from '../../basic/index';
import TextInput from '../../basic/inputs/input';

import {
  TOP_ROUND,
  GO,
  BOTTOM_ROUND,
  NEXT,
  NO_ROUND,
  ROUND
} from '../../../constants/types';
import validate from './validate';


import { Header } from '../../composite/header';

import { withUnderLine } from '../../HOC/underline';
import BackArrow from '../../../assets/icons/black-back-arrow';
import { withWhiteBackground } from '../../HOC/background';
import style from './style';

const UnderLine = withUnderLine(BodyBold);

const ProfileTab = ({ navigation }) => {
  const { goBack } = navigation;

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => goBack()}
          style={{ paddingRight: 24, paddingTop: 26 }}>
          <UnderLine text="Cancel" />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => goBack()}
          style={{ paddingLeft: 16, paddingTop: 26 }}>
          <SvgXml xml={BackArrow} />
        </TouchableOpacity>
      ),
    });
  }, [goBack, navigation]);

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={style.container}>
          <View style={{ ...style.center, ...style.marginTop8 }}>
            <H6 text="Edit Profile" />
            <LinearGradient
              start={{ x: 0.5, y: 0.0 }}
              end={{ x: 0.5, y: 1.0 }}
              locations={[0.5, 1.0]}
              colors={['rgb(255,156,121)', 'rgb(255,146,149)']}
              style={style.edit_pp}>
              <Text style={style.pp_text}>NK</Text>
            </LinearGradient>
            <View style={{ marginTop: 14 }}>
              <Link text="Change" />
            </View>
          </View>

          <View style={style.marginTop33}>
            <Field
              name={'name'}
              component={TextInput}
              label="Name"
              placeholder="Enter your name"
              shape={ROUND}
              returnKeyType={NEXT}
            />
          </View>
          <View style={style.marginTop20}>
            <Field
              name={'email'}
              component={TextInput}
              label="Email address"
              placeholder="Enter your email address"
              shape={ROUND}
              returnKeyType={NEXT}
            />
          </View>
          <View style={style.marginTop20}>
            <Field
              name={'mobile'}
              component={TextInput}
              label="Mobile Number"
              placeholder="Enter your mobile number"
              shape={ROUND}
              returnKeyType={NEXT}
            />
          </View>
          <View style={style.marginTop20}>
            <Field
              name={'address'}
              component={TextInput}
              label="Address"
              placeholder="Enter your address"
              shape={ROUND}
              returnKeyType={NEXT}
            />
          </View>
          <View style={style.save_changes}>
            <SecondaryButton text="Save Changes" />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default reduxForm({
  form: 'EditProfile',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(withWhiteBackground(ProfileTab));
