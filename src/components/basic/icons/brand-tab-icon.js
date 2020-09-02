import React from 'react';
import {SvgXml} from 'react-native-svg';

import profile from '../../../assets/icons/brand-profile';
import progress from '../../../assets/icons/progress';
import followup from '../../../assets/icons/follow-up';
import inbox from '../../../assets/icons/brand-inbox';
import offers from '../../../assets/icons/offers';

import {
  PROGRESS,
  FOLLOWUP,
  OFFERS,
  INBOX,
  PROFILE,
} from '../../../constants/types';

const BrandTabBarIcon = (route, {focused, color, size, tintColor}) => {
  let xml = profile;

  switch (route) {
    case PROGRESS:
      xml = progress;
      break;
    case FOLLOWUP:
      xml = followup;
      break;
    case OFFERS:
      xml = offers;
      break;
    case INBOX:
      xml = inbox;
      break;
    case PROFILE:
      xml = profile;
      break;
  }
  return <SvgXml xml={xml} fill={color} />;
};

export default BrandTabBarIcon;
