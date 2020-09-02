/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

import {ROUND} from '../../../constants/types';

export default function TextArea({
  input: {value, onChange, onBlur},
  meta: {error, touched, valid, visited, invalid},
  label,
  values,
  placeholder,
  shape = ROUND,
  isPassword = false,
  returnKeyType = 'done',
  onSubmitEditing,
  onRef,
  autoFocus = false,
  ...inputProps
}) {
  const [active, setActive] = useState(false);

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
    height: 174,
  };

  if (invalid && touched) {
    containerStyles.backgroundColor = '#FDF4F2';
    containerStyles.borderColor = '#C23818';
  }

  return (
    <View style={containerStyles}>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          {...inputProps}
          onChangeText={onChange}
          value={value}
          ref={inpt => {
            onRef && onRef(inpt);
          }}
          style={{
            paddingVertical: 0,
            paddingHorizontal: 30,
            color: 'rgb(32,32,32)',
            letterSpacing: -0.33,
            fontSize: 16,
            marginTop: 15,
            marginLeft: -16,
            height: 150,
            justifyContent: 'flex-start',
            textAlignVertical: 'top',
          }}
          multiline={true}
          numberOfLines={40}
          placeholder={placeholder}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          placeholderTextColor={invalid && touched ? '#C23818' : '#8E8E8E'}
          autoFocus={autoFocus}
        />
      </View>
    </View>
  );
}
