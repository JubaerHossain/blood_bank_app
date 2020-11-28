/* eslint-disable react-native/no-inline-styles */
import React, { useState, useLayoutEffect, useContext } from 'react';
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
import Footer from '../../composite/footer/footer';

import { withUnderLine } from '../../HOC/underline';
import BackArrow from '../../../assets/icons/black-back-arrow';
import { withWhiteBackground } from '../../HOC/background';
import style from './style';
import { LocalizationContext } from '../../../utils/localization-context';

const UnderLine = withUnderLine(BodyBold);

const ProfileTab = ({ navigation, previous , handleSubmit}) => {
  const { goBack } = navigation;

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { translations } = useContext(LocalizationContext);


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
            <H6 text={translations.edit_profile} />
          </View>
          <View style={style.marginTop20}>
            <Field
              name={'present_address'}
              component={TextInput}
              label={translations.present_address}
              placeholder={translations.enter_your_present_address}
              shape={ROUND}
              returnKeyType={NEXT}
            />
          </View>
          <View style={style.marginTop20}>
            <Field
              name={'permanent_address'}
              component={TextInput}
              label={translations.permanent_address}
              placeholder={translations.enter_your_permanent_address}
              shape={ROUND}
              returnKeyType={NEXT}
            />
          </View>
          <View style={style.marginTop20}>
            <Field
              name={'educational_qualification'}
              component={TextInput}
              label={translations.educational_qualification}
              placeholder={translations.enter_your_educational_qualification}
              shape={ROUND}
              returnKeyType={NEXT}
            />
          </View>
          <View style={style.marginTop20}>
            <Field
              name={'last_donation_date'}
              component={TextInput}
              label={translations.last_donation_date}
              placeholder={translations.enter_your_last_donation}
              shape={ROUND}
              returnKeyType={NEXT}
            />
          </View>
          <View style={style.save_changes}>
            <SecondaryButton text={translations.save_changes} onPress={handleSubmit}/>
          </View>
        </View>
      </ScrollView>
      <Footer onPress={previous} action={translations.previous} text={translations.edit_profile} steps={2}/>
    </>
  );
};

export default reduxForm({
  form: 'EditProfile',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(withWhiteBackground(ProfileTab));
