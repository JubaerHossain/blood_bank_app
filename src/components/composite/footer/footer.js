/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Footer = ({steps = 1, onPress, action = 'Next', text = 'Edit profile'}) => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'rgb(79,129,189)',
          width: '100%',
          height: 83,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{paddingLeft: 24, paddingTop: 21}}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                letterSpacing: -0.13,
                fontFamily: 'CircularStd-Book',
              }}>
              {text}
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                lineHeight: 19,
                letterSpacing: -0.23,
                fontFamily: 'CircularStd-Black',
              }}>
              {steps}/2 steps
            </Text>
          </View>
          <View style={{paddingTop: 17, paddingBottom: 16, paddingRight: 24}}>
            <TouchableOpacity
              onPress={onPress}
              style={{
                height: 50,
                width: 110,
                backgroundColor: '#00A699',
                borderRadius: 6,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'rgb(255, 255, 255)',
                  alignSelf: 'center',
                  fontSize: 18,
                  fontFamily: 'CircularStd-Bold',
                  lineHeight: 21,
                  textTransform: 'capitalize',
                }}>
                {action}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Footer;
