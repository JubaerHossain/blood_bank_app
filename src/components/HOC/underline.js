import React from 'react';
import {Text} from 'react-native';
import style from './style';

export const withUnderLine = BaseComponent => ({onPress, ...props}) => (
  <Text style={style.underline} onPress={onPress}>
    <BaseComponent {...props} />
  </Text>
);
