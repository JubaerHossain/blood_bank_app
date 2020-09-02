import React from 'react';
import {View} from 'react-native';

import style from './style';

export const withWhiteBackground = BaseComponent => props => (
  <View style={style.main_container}>
    <BaseComponent {...props} />
  </View>
);
