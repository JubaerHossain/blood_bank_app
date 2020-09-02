/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

const H6 = ({text}) => {
  return (
    <Text
      style={{
        color: 'rgb(118, 118, 118)',
        fontSize: 15,
        letterSpacing: -0.23,
        fontFamily: 'CircularStd-Medium',
      }}>
      {text}
    </Text>
  );
};

export default H6;
