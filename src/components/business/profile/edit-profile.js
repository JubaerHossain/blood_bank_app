/* eslint-disable react-native/no-inline-styles */
import React, { useState, useLayoutEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Field, reduxForm } from "redux-form";

import {
  BodyBold,
  SecondaryButton,
  H6,
  Link,
  RoundFloatingInput,
  File
} from '../../basic/index';

import { withUnderLine } from '../../HOC/underline';
import BackArrow from '../../../assets/icons/black-back-arrow';
import { withWhiteBackground } from '../../HOC/background';
import style from './style';
import { connect } from 'react-redux';
import validate from './validate';
import { ROUND } from '../../../constants/types';
import TextInput from '../../basic/inputs/input';
import { deviceRespectedSize } from '../../../utils/calcaulation';

const windowWidth = Dimensions.get('window').width;


const UnderLine = withUnderLine(BodyBold);

let ProfileEdit = ({
  navigation,
  handleSubmit,
  profilePicture,
  setProfilePicture
}) => {
  const { goBack } = navigation;

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  console.log(profilePicture);

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
            {/* <TouchableOpacity onPress={() => imagePicker(setProfilePicture)}>
              <Link text="Change" />
            </TouchableOpacity> */}
          </View>
        </View>

        <View style={style.marginTop33}>
          <Field
            name={'name'}
            component={TextInput}
            label="name"
            placeholder="Enter your name"
            shape={ROUND}
          />

        </View>
        <View style={style.marginTop20}>
          <Field
            name={'email'}
            component={TextInput}
            label="Email"
            placeholder="Enter your email"
            shape={ROUND}
          />
        </View>
        <View style={style.marginTop20}>
          <Field
            name={'password'}
            component={TextInput}
            label="Password"
            placeholder="Enter your password"
            shape={ROUND}
          />
        </View>
        <View style={style.marginTop20}>
          <Field
            name={'confirmPassword'}
            component={TextInput}
            label="Confirm Password"
            placeholder="Re Enter your password"
            shape={ROUND}
          />
        </View>
        <View style={style.save_changes}>
          <SecondaryButton onPress={handleSubmit}  text="Save Changes" />
        </View>
      </View>
    </ScrollView>
  );
};

ProfileEdit = reduxForm({
  form: 'profile-edit',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
  touchOnChange: true,
})(withWhiteBackground(ProfileEdit));

ProfileEdit = connect((state) => ({
  initialValues: state.user.user,
}))(ProfileEdit)

export default ProfileEdit;
