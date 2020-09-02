/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {SvgXml} from 'react-native-svg';

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
import {withUnderLine} from '../../HOC/underline';
import logo from '../../../assets/icons/logo';
import businessAndFinance from '../../../assets/icons/business-finance';
import {withWhiteBackground} from '../../HOC/background';
import style from './style';
import {deviceRespectedSize} from '../../../utils/calcaulation';

const UnderLine = withUnderLine(BodyBold);

const ProfileTab = ({navigation}) => {
  const [profile] = useState('NKN');

  return (
    <ScrollView>
      {profile !== '' ? (
        <>
          <View style={{marginLeft: 22, marginRight: 22}}>
            <View style={{marginTop: 87}}>
              <SvgXml xml={logo} height={54} width={54} />
            </View>
            <View style={{width: deviceRespectedSize(345)}}>
              <Text
                style={{
                  fontSize: deviceRespectedSize(32),
                  lineHeight: deviceRespectedSize(42),
                  letterSpacing: -deviceRespectedSize(0.65),
                  color: 'rgb(190,26,85)',
                  marginTop: deviceRespectedSize(35),
                  fontFamily: 'CircularStd-Book',
                }}>
                30k shoppers daily find their offers here. Don’t miss it!
              </Text>
            </View>
            <View style={{marginTop: 19, height: 40}}>
              <Body2 text="bss facilitates the brands to post their offers so that you can’t miss any of them." />
            </View>
            <View style={{marginTop: 82}}>
              <PrimaryButton onPress={() => navigation.navigate('login')}>
                <ButtonTextWhite>Sign In as Shopper</ButtonTextWhite>
              </PrimaryButton>
            </View>
            <View style={{marginTop: 21}}>
              <OutlineButton
                onPress={() => {
                  navigation.navigate('brand-login');
                }}>
                <ButtonTextBlack>Sign In as Brand</ButtonTextBlack>
              </OutlineButton>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('signup')}
              style={{
                marginTop: 27,
                height: 19,
                alignItems: 'center',
              }}>
              <UnderLine text="Create shopper account" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('signup-brand')}
              style={{
                marginTop: 25,
                marginBottom: 35,
                height: 19,
                alignItems: 'center',
              }}>
              <UnderLine text="Create brand account" />
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={{marginLeft: 22, marginTop: 28, marginRight: 24}}>
            <View style={{alignItems: 'flex-end'}}>
              <UnderLine
                text="Edit"
                onPress={() => navigation.navigate('edit-profile')}
              />
            </View>
            <View style={{...style.flex_row, marginBottom: 6}}>
              <View style={style.main_text}>
                <H1 text="Hi, Nuruzzaman Khan" />
                <View style={{marginTop: 7}}>
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
              <Body2 text="Following Offers" />
              <Text style={style.security_text}>34</Text>
            </View>
            <View style={style.hr} />
            <View style={style.flex_row}>
              <Body2 text="Favorite Brands" />
              <Text style={style.security_text}>231</Text>
            </View>
            <View style={style.hr} />
            <View style={{marginBottom: 24}}>
              <View style={{marginTop: 28}}>
                <SvgXml xml={businessAndFinance} />
              </View>
              <View style={style.marginTop}>
                <Text style={style.security_text}>
                  For your security, verify email address
                </Text>
              </View>
              <View style={{...style.marginTop8, width: 327}}>
                <Body text="To get personalized suggestion and to protect your profile information, please verify your email address" />
              </View>
              <View style={{width: 131, marginTop: 19}}>
                <SecondaryButton text="Verify Email" />
              </View>
            </View>
            <View style={style.hr} />
            <View style={{marginTop: 3}}>
              <OutlineButton
                onPress={() => {
                  navigation.navigate('brand-login');
                }}>
                <ButtonTextBlack>Sign In as Brand</ButtonTextBlack>
              </OutlineButton>
            </View>
            <TouchableOpacity
              style={{
                marginTop: 27,
                height: 19,
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <UnderLine text="Sign Out" />
            </TouchableOpacity>
            <View style={{...style.flex_row, marginTop: 39, marginBottom: 28}}>
              <BodyGrey text="Give us feedback" />
              <BodyGrey text="Terms of service" />
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default withWhiteBackground(ProfileTab);
