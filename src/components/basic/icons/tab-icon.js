import React from 'react';
import {SvgXml} from 'react-native-svg';

import brands from '../../../assets/icons/brands';
import explore from '../../../assets/icons/explore';
import followed from '../../../assets/icons/followed';
import inbox from '../../../assets/icons/inbox';
import profile from '../../../assets/icons/profile';

const TabBarIcon = (route, {focused, color, size, tintColor}) => {
  let xml = explore;

  switch (route) {
    case 'EXPLORE':
      xml = explore;
      break;
    case 'BRANDS':
      xml = brands;
      break;
    case 'FOLLOWED':
      xml = followed;
      break;
    case 'INBOX':
      xml = inbox;
      break;
    case 'PROFILE':
      xml = profile;
      break;
  }
  return <SvgXml xml={xml} fill={color} height={22} width={25} />;
};

export default TabBarIcon;
