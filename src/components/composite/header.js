/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { deviceRespectedSize } from '../../utils/calcaulation';

export const Header = ({ navigation }) => {

  return (
      <View
        style={{
          paddingTop: 8,
          paddingBottom: 8,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'rgb(79,129,189)'
        }}>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            paddingLeft: deviceRespectedSize(5),
            paddingTop: 20,
          }}>
          <Icon
            name='three-bars'
            size={30}
            color='#000'
            onPress={() => navigation.toggleDrawer()}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ paddingTop: 20, paddingRight: deviceRespectedSize(5), }}>
          <Icon
            name='home'
            size={30}
            color='#000'
            onPress={() => navigation.navigate('home')}
          />
        </TouchableOpacity>
      </View>
  )
};


