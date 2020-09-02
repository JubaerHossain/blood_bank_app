/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

const H3 = ({text}) => {
  return (
    <Text
      style={{
        color: 'rgb(72, 72, 72)',
        fontSize: 24,
        letterSpacing: -0.19,
        fontFamily: 'CircularStd-Bold',
      }}>
      {text}
    </Text>
  );
};

export default H3;
