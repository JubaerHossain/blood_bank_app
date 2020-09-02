/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import moment from 'moment';
import {View, Platform, TouchableOpacity, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {SvgXml} from 'react-native-svg';

import calender from '../../../assets/icons/calender';
import {StartEndText, StartEndSmallText, GreenStartEndSmallText} from './style';
import {GREEN} from '../../../constants/types';
import {deviceRespectedSize} from '../../../utils/calcaulation';

const DatePicker = ({
  input: {value, onChange},
  meta: {error, touched, valid, visited, invalid},
  position,
  label,
  color,
}) => {
  const [show, setShow] = useState(false);

  const showMode = () => {
    setShow(true);
  };

  const containerStyle = {
    height: 57,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: '#DCDCDC',
    borderWidth: 1,
  };

  switch (position) {
    case 'left':
      containerStyle.borderTopLeftRadius = 8;
      containerStyle.borderBottomLeftRadius = 8;
      containerStyle.borderRightWidth = 0;
      break;

    case 'right':
      containerStyle.borderTopRightRadius = 8;
      containerStyle.borderBottomRightRadius = 8;
      containerStyle.borderLeftWidth = 0;
      break;
    default:
      break;
  }

  return (
    <View
      style={{
        justifyContent: 'center',
      }}>
      <TouchableOpacity onPress={showMode} style={containerStyle}>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          {!value ? (
            <View
              style={{
                marginRight: deviceRespectedSize(64),
                marginLeft: deviceRespectedSize(10),
              }}>
              <StartEndText style={{fontSize: deviceRespectedSize(16)}}>
                {label}
              </StartEndText>
            </View>
          ) : (
            <View
              style={{
                marginRight: deviceRespectedSize(57),
                marginLeft: deviceRespectedSize(14),
              }}>
              {color === GREEN ? (
                <GreenStartEndSmallText
                  style={{fontSize: deviceRespectedSize(13)}}>
                  {label}
                </GreenStartEndSmallText>
              ) : (
                <StartEndSmallText style={{fontSize: deviceRespectedSize(13)}}>
                  {label}
                </StartEndSmallText>
              )}
              <Text style={{fontSize: deviceRespectedSize(13)}}>
                {moment(value).format('DD/MM/YYYY')}
              </Text>
            </View>
          )}
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            marginRight: deviceRespectedSize(19),
          }}>
          <SvgXml xml={calender} />
        </View>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={value || new Date(1598051730000)}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || value;
            setShow(Platform.OS === 'ios');
            onChange(currentDate);
          }}
        />
      )}
    </View>
  );
};

export default DatePicker;
