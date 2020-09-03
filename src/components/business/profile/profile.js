/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import {
  PrimaryButton,
  OutlineButton,
  BodyBold,
  H1,
  Body2,
  Body,
  SecondaryButton,
  BodyGrey,
  ButtonTextBlack,
  ButtonTextWhite,
} from '../../basic/index';
import { withUnderLine } from '../../HOC/underline';
import logo from '../../../assets/icons/logo';
import businessAndFinance from '../../../assets/icons/business-finance';
import { withWhiteBackground } from '../../HOC/background';
import style from './style';
import { deviceRespectedSize } from '../../../utils/calcaulation';
import { Header } from '../../composite/header';

const UnderLine = withUnderLine(BodyBold);

const ProfileTab = ({ navigation }) => {
  const [profile] = useState('NKN');

  return (
    <>
      <Header navigation={navigation} />
      <ScrollView>
        <View style={{ marginLeft: 22, marginTop: 28, marginRight: 24 }}>
          <View style={{ alignItems: 'flex-end' }}>
            <UnderLine
              text="Edit"
              onPress={() => navigation.navigate('edit-profile')}
            />
          </View>
          <View style={{ ...style.flex_row, marginBottom: 6 }}>
            <View style={style.main_text}>
              <H1 text="Hi, Nuruzzaman Khan" />
              <View style={{ marginTop: 7 }}>
                <Body2 text="nuruzzaman@email.com" />
              </View>
            </View>
            <View>
              <Image
                style={style.pp}
                source={require('../../../assets/images/pp.jpg')}
              />
            </View>
          </View>
          <View style={style.hr} />
          <View style={style.flex_row}>
            <Body2 text="Donated Blood" />
            <Text style={style.security_text}>4</Text>
          </View>
          <View style={style.hr} />
          <View style={style.flex_row}>
            <Body2 text="Demaned Blood" />
            <Text style={style.security_text}>10</Text>
          </View>
          <View style={style.hr} />
          <View style={{ marginBottom: 24 }}>
            <View style={{ marginTop: 28 }}>
              <SvgXml xml={businessAndFinance} />
            </View>
            <View style={style.marginTop}>
              <Text style={style.security_text}>
                For your security, verify email address
                </Text>
            </View>
            <View style={{ ...style.marginTop8, width: 327 }}>
              <Body text="To get personalized suggestion and to protect your profile information, please verify your email address" />
            </View>
            <View style={{ width: 131, marginTop: 19 }}>
              <SecondaryButton text="Verify Email" />
            </View>
          </View>
        </View>

      </ScrollView>
    </>
  );
};

export default withWhiteBackground(ProfileTab);
