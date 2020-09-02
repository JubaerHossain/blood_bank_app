/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';

const SecondarySmallBoldGreen2 = ({text}) => {
  return (
    <Text
      style={{
        fontFamily: 'CircularStd-Bold',
        fontSize: 13,
        color: 'rgb(118, 118, 118)',
        letterSpacing: -0.11,
      }}>
      {text}
    </Text>
  );
};

export default SecondarySmallBoldGreen2;
