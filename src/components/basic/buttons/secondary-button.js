/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {deviceRespectedSize} from '../../../utils/calcaulation';

const SecondaryButton = ({onPress, text}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: deviceRespectedSize(50),
        backgroundColor: 'rgb(34, 34, 34)',
        borderRadius: 5,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: 'rgb(255, 255, 255)',
          alignSelf: 'center',
          fontSize: 16,
          letterSpacing: -0.14,
          fontFamily: 'CircularStd-Medium',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default SecondaryButton;
