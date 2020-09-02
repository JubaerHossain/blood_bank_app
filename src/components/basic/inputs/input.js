/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  NativeModules,
  LayoutAnimation,
} from 'react-native';

// import {I} from '../../business/brand/sign-up/style';
const {UIManager} = NativeModules;

import {
  ROUND,
  TOP_ROUND,
  BOTTOM_ROUND,
  NO_ROUND,
} from '../../../constants/types';
import {deviceRespectedSize} from '../../../utils/calcaulation';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default function Input({
  input: {value, onChange, onBlur},
  meta: {error, touched, valid, visited, invalid},
  label,
  values,
  placeholder,
  shape = ROUND,
  isPassword = false,
  returnKeyType = 'done',
  onSubmitEditing,
  autoFocus = false,
  onRef,
  ...inputProps
}) {
  const [isFocused, setIsFocused] = useState(value === '' ? true : false);
  const [active, setActive] = useState(false);

  let textInput;

  console.log('Respected size: ', deviceRespectedSize(16));

  const customLabelStyles = {
    leftFocused: 14,
    leftBlurred: 14,
    topFocused: 9,
    topBlurred: 19,
    fontSizeFocused: deviceRespectedSize(13),
    fontSizeBlurred: deviceRespectedSize(16),
    colorFocused: '#00A699',
    colorBlurred: '#767676',
    letterSpacingFocused: -0.11,
    letterSpacingBlurred: -0.04,
  };

  const containerStyles = {
    color: '#49658c',
    borderRadius: 30,
    backgroundColor: active ? '#F5F5F5' : '#00000000',
    paddingTop: 10,
    paddingBottom: 10,
    alignContent: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 8,
    borderTopEndRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: active ? '#222222' : '#A7A7A7',
    borderWidth: active ? 2 : 1,
    height: 57,
  };

  const style = {
    zIndex: 3,
    position: 'absolute',
    left: isFocused
      ? customLabelStyles.leftBlurred
      : customLabelStyles.leftFocused,
    top: isFocused
      ? customLabelStyles.topBlurred
      : customLabelStyles.topFocused,
    fontSize: isFocused
      ? customLabelStyles.fontSizeBlurred
      : customLabelStyles.fontSizeFocused,
    color: active
      ? customLabelStyles.colorFocused
      : customLabelStyles.colorBlurred,
    fontFamily: 'CircularStd-Book',
  };

  const setFocus = () => {
    textInput.focus();
  };

  const handleFocus = () => {
    LayoutAnimation.spring();
    setIsFocused(false);
    setActive(true);
  };

  const handleBlur = () => {
    onBlur();
    if (value === '') {
      setIsFocused(true);
      LayoutAnimation.spring();
    }
    setActive(false);
  };

  if (invalid && touched) {
    containerStyles.backgroundColor = '#FDF4F2';
    containerStyles.borderColor = '#C23818';
    style.color = '#C2391A';
  }

  switch (shape) {
    case TOP_ROUND:
      containerStyles.borderBottomLeftRadius = 0;
      containerStyles.borderBottomRightRadius = 0;
      containerStyles.borderBottomWidth = active ? 2 : 0.5;
      break;

    case BOTTOM_ROUND:
      containerStyles.borderTopLeftRadius = 0;
      containerStyles.borderTopEndRadius = 0;
      containerStyles.borderTopWidth = active ? 2 : 0.5;
      break;

    case NO_ROUND:
      containerStyles.borderTopLeftRadius = 0;
      containerStyles.borderTopEndRadius = 0;
      containerStyles.borderBottomLeftRadius = 0;
      containerStyles.borderBottomRightRadius = 0;
      containerStyles.borderBottomWidth = active ? 2 : 0.5;
      containerStyles.borderTopWidth = active ? 2 : 0.5;
      break;

    default:
      break;
  }

  return (
    <View style={containerStyles}>
      <Text onPress={() => setFocus()} style={style}>
        {label}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          {...inputProps}
          onChangeText={onChange}
          value={value}
          ref={inpt => {
            textInput = inpt;
            onRef && onRef(inpt);
          }}
          style={{
            paddingVertical: 0,
            paddingHorizontal: 30,
            flex: 1,
            zIndex: 1,
            color: 'rgb(32,32,32)',
            letterSpacing: -0.33,
            fontSize: 16,
            marginTop: 15,
            marginLeft: -16,
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={active ? placeholder : ''}
          secureTextEntry={isPassword}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          autoFocus={autoFocus}
        />
        {touched && invalid && (
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#C23818',
              justifyContent: 'center',
              alignSelf: 'center',
              marginRight: 19,
            }}>
            <View style={{alignItems: 'center'}}>
              <I>i</I>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
