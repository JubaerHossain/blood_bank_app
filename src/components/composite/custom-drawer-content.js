import React, { useContext, useLayoutEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import { LocalizationContext } from '../../utils/localization-context';
import Icon from 'react-native-vector-icons/Octicons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import { deviceRespectedSize } from '../../utils/calcaulation';

export function CustomDrawerContent(props) {
  const { navigation } = props;
  const { translations } = useContext(LocalizationContext);
  
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ alignSelf: 'center' }}>
        <Image
          style={{
            height: deviceRespectedSize(90),
            width: deviceRespectedSize(90),
            borderRadius: 45,
            marginTop: deviceRespectedSize(5),
          }}
          source={require('../../assets/images/pp.jpg')}
        />
      </View>
      <>
        <Text
          style={{
            fontSize: 18,
            letterSpacing: -0.37,
            color: 'rgb(0,0,0)',
            marginRight: 8,
            fontFamily: 'CircularStd-Book',
            lineHeight: 21,
            textAlign: 'center'
          }}>
          Anamul Haque
                </Text>
        <Text
          style={{
            fontSize: 18,
            letterSpacing: -0.37,
            color: 'rgb(0,0,0)',
            marginRight: 8,
            fontFamily: 'CircularStd-Book',
            lineHeight: 21,
            textAlign: 'center'
          }}>
          01754259863
        </Text>
      </>
      <DrawerItem
        label={translations.profile}
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Ionicon color='black' size={25} name={'person-circle-outline'} />}
        onPress={() => navigation.navigate('profile')}
      />
      <DrawerItem
        label={translations.settings}
        style={{ marginTop: - deviceRespectedSize(10) }}
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Ionicon color='black' size={25} name={'settings-outline'} />}
      />
      <DrawerItem
        style={{ marginLeft: 50, marginTop: - deviceRespectedSize(10) }}
        label={translations.language}
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Fontisto color='black' size={25} name={'world-o'} />}
        onPress={() => navigation.navigate('settings')}
      />
      <DrawerItem
        style={{ marginLeft: 50, marginTop: - deviceRespectedSize(10) }}
        label={translations.ambulance_registration}
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Fontisto color='black' size={25} name={'ambulance'} />}
        onPress={() => navigation.navigate('login')}
      />
      <DrawerItem
        label={translations.message}
        style={{ marginTop: - deviceRespectedSize(10) }}
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Ionicon color='black' size={25} name={'chatbox-ellipses-outline'} />}
        onPress={() => navigation.navigate('login')}
      />
      <DrawerItem
        label={translations.help}
        style={{ marginTop: - deviceRespectedSize(10) }}
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Ionicon color='black' size={25} name={'help-circle-outline'} />}
        onPress={() => navigation.navigate('login')}
      />
      <DrawerItem
        label={translations.bss_facebook_page}
        style={{ marginTop: - deviceRespectedSize(10) }}
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Ionicon color='black' size={25} name={'logo-facebook'} />}
        onPress={() => navigation.navigate('login')}
      />
      <DrawerItem
        label={translations.rating}
        style={{ marginTop: - deviceRespectedSize(10) }}
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Ionicon color='black' size={25} name={'star-outline'} />}
        onPress={() => navigation.navigate('login')}
      />
      <DrawerItem
        label={translations.about_us}
        style={{ marginTop: - deviceRespectedSize(10) }}
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Ionicon color='black' size={25} name={'information-circle-outline'} />}
        onPress={() => navigation.navigate('login')}
      />
      <DrawerItem
        label={translations.exit}
        style={{ marginTop: - deviceRespectedSize(10) }}
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Entypo color='black' size={25} name={'log-out'} />}
        onPress={() => navigation.navigate('login')}
      />
    </DrawerContentScrollView>
  );
}