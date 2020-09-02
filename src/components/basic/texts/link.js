/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

const Link = ({text}) => {
  return (
    <Text
      style={{
        color: 'rgb(0, 166, 153)',
        fontSize: 14,
        letterSpacing: -0.12,
        fontFamily: 'CircularStd-Book',
      }}>
      {text}
    </Text>
  );
};

export default Link;
