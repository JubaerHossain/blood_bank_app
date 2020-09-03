import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';


import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Octicons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';


import { deviceRespectedSize } from '../../utils/calcaulation';



export function CustomDrawerContent(props) {
  const { navigation } = props;
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
          +8801524789658
          </Text>
      </>
      <DrawerItem
        label="Profile"
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Ionicon color='black' size={25} name={'person-circle-outline'} />}
        onPress={() => navigation.navigate('profile')}
      />
      <DrawerItem
        label="Settings"
        style={{marginTop: - deviceRespectedSize(10)}}
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Ionicon color='black' size={25} name={'settings-outline'} />}
        // onPress={() => navigation.navigate('login')}
      />
      <DrawerItem
        style={{marginLeft: 50, marginTop: - deviceRespectedSize(10)}}
        label="Language"
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Fontisto color='black' size={25} name={'world-o'} />}
        onPress={() => navigation.navigate('login')}
      />
      <DrawerItem
        style={{marginLeft: 50, marginTop: - deviceRespectedSize(10)}}
        label="Ambulance Registration"
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Fontisto color='black' size={25} name={'ambulance'} />}
        onPress={() => navigation.navigate('login')}
      />
      <DrawerItem
        label="Message"
        style={{marginTop: - deviceRespectedSize(10)}}
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Ionicon color='black' size={25} name={'chatbox-ellipses-outline'} />}
        onPress={() => navigation.navigate('login')}
      />
      <DrawerItem
        label="Help"
        style={{marginTop: - deviceRespectedSize(10)}}
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Ionicon color='black' size={25} name={'help-circle-outline'} />}
        onPress={() => navigation.navigate('login')}
      />
      <DrawerItem
        label="BSS Facebook Page"
        style={{marginTop: - deviceRespectedSize(10)}}
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Ionicon color='black' size={25} name={'logo-facebook'} />}
        onPress={() => navigation.navigate('login')}
      />
      <DrawerItem
        label="Rating"
        style={{marginTop: - deviceRespectedSize(10)}}
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Ionicon color='black' size={25} name={'star-outline'} />}
        onPress={() => navigation.navigate('login')}
      />
      <DrawerItem
        label="About Us"
        style={{marginTop: - deviceRespectedSize(10)}}
        labelStyle={{
          fontSize: 20,
          color: 'black',
          fontFamily: 'CircularStd-Book',
        }}
        icon={({ focused, color, size }) => <Ionicon color='black' size={25} name={'information-circle-outline'} />}
        onPress={() => navigation.navigate('login')}
      />
      <DrawerItem
        label="Exit"
        style={{marginTop: - deviceRespectedSize(10)}}
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