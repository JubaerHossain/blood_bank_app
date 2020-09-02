/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {deviceRespectedSize} from '../../../utils/calcaulation';

const GreenOutlineButton = ({onPress, text}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: deviceRespectedSize(46),
        backgroundColor: 'rgb(255, 255, 255)',
        borderRadius: 6,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgb(0,166,166)',
      }}>
      <Text
        style={{
          color: 'rgb(0, 166, 166)',
          alignSelf: 'center',
          fontSize: deviceRespectedSize(16),
          letterSpacing: -0.14,
          fontFamily: 'CircularStd-Medium',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default GreenOutlineButton;
