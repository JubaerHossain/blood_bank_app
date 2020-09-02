/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

const H1 = ({text}) => {
  return (
    <Text
      style={{
        color: 'rgb(72, 72, 72)',
        fontSize: 30,
        letterSpacing: -0.3,
        fontFamily: 'CircularStd-Bold',
        lineHeight: 35,
      }}>
      {text}
    </Text>
  );
};

export default H1;
