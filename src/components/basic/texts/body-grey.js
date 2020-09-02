import React from 'react';
import {Text} from 'react-native';

import style from './style';

const BodyBold = ({text}) => {
  return <Text style={style.body_grey}>{text}</Text>;
};

export default BodyBold;
