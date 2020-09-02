/* eslint-disable react-native/no-inline-styles */
import React, {useLayoutEffect, useState} from 'react';

import {Text, StatusBar, View} from 'react-native';

import {SvgXml} from 'react-native-svg';
import backArrow from '../../../assets/icons/black-back-arrow';

import {RoundFloatingInput} from '../../basic/index';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

import {withWhiteBackground} from '../../HOC/background';

const ForgotPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{paddingTop: 39, paddingLeft: 17}}>
          <SvgXml xml={backArrow} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <ScrollView>
        <View style={{marginTop: 106, marginLeft: 22, marginRight: 22}}>
          <Text
            style={{
              fontSize: 24,
              letterSpacing: -0.19,
              color: 'rgb(72, 72,72)',
              marginTop: 27,
              marginBottom: 27,
              fontWeight: 'bold',
            }}>
            Reset password
          </Text>
          <RoundFloatingInput
            label="Email address"
            value={email}
            onChange={value => setEmail(value)}
          />

          <TouchableOpacity
            style={{
              height: 50,
              //   backgroundColor: 'rgb(220, 221, 220)',
              backgroundColor: 'rgb(255, 90, 95)',
              borderRadius: 4,
              justifyContent: 'center',
              marginTop: 19,
            }}>
            <Text
              style={{
                color: 'rgb(255, 255, 255)',
                alignSelf: 'center',
                fontSize: 18,
                letterSpacing: -0.15,
                fontWeight: 'bold',
              }}>
              Send Reset Link
            </Text>
          </TouchableOpacity>

          <Text
            onPress={() => navigation.pop()}
            style={{
              fontSize: 14,
              letterSpacing: -0.12,
              color: 'rgb(0, 166,153)',
              marginTop: 29,
              textAlign: 'center',
            }}>
            Dismiss
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default withWhiteBackground(ForgotPassword);
