/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {deviceRespectedSize} from '../../../utils/calcaulation';

const BodyBold = ({text}) => {
  return (
    <Text
      style={{
        color: '#222222',
        fontSize: deviceRespectedSize(15),
        letterSpacing: -0.33,
        fontFamily: 'CircularStd-Bold',
        lineHeight: 18,
      }}>
      {text}
    </Text>
  );
};

export default BodyBold;
