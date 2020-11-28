/* eslint-disable react-native/no-inline-styles */
import React, { useState, useLayoutEffect, useContext } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { Field, reduxForm } from 'redux-form';
import { LocalizationContext } from '../../../utils/localization-context';


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

const UnderLine = withUnderLine(BodyBold);

const ProfileTab = ({ navigation , handleSubmit}) => {
  const { goBack } = navigation;

  const { translations } = useContext(LocalizationContext);

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
            <H6 text={translations.edit_profile} />
            <LinearGradient
              start={{ x: 0.5, y: 0.0 }}
              end={{ x: 0.5, y: 1.0 }}
              locations={[0.5, 1.0]}
              colors={['rgb(255,156,121)', 'rgb(255,146,149)']}
              style={style.edit_pp}>
              <Text style={style.pp_text}>NK</Text>
            </LinearGradient>
            <View style={{ marginTop: 14 }}>
              <Link text={translations.change} />
            </View>
          </View>

          <View style={style.marginTop33}>
            <Field
              name={'name'}
              component={TextInput}
              label={translations.name}
              placeholder={translations.enter_your_name}
              shape={ROUND}
              returnKeyType={NEXT}
            />
          </View>
          <View style={style.marginTop20}>
            <Field
              name={'mobile_two'}
              component={TextInput}
              label={translations.second_mobile}
              placeholder={translations.enter_your_second_mobile_number}
              shape={ROUND}
              returnKeyType={NEXT}
            />
          </View>
          <View style={style.marginTop20}>
            <Field
              name={'date_of_birth'}
              component={TextInput}
              label={translations.date_of_birth}
              placeholder={translations.enter_date_of_birth}
              shape={ROUND}
              returnKeyType={NEXT}
            />
          </View>
        </View>
      </ScrollView>
      <Footer onPress={handleSubmit} action={translations.next} text={translations.edit_profile}/>
    </>
  );
};

export default reduxForm({
  form: 'EditProfile',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(withWhiteBackground(ProfileTab));
