/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {deviceRespectedSize} from '../../../utils/calcaulation';

const Body = ({text}) => {
  return (
    <Text
      style={{
        color: 'rgb(72, 72, 72)',
        fontSize: deviceRespectedSize(15),
        letterSpacing: -0.128125,
        fontFamily: 'CircularStd-Book',
        lineHeight: 18,
      }}>
      {text}
    </Text>
  );
};

export default Body;
