import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, Image, TouchableOpacity } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';


// Import screens
import SignUpScreen from '../components/business/sign-up/sign-up-container';
import LoginScreen from '../components/business/login/login-container';
import HomeScreen from '../components/business/home/home';
import ProfileScreen from '../components/business/profile/profile';
import EditProfileScreen from '../components/business/profile/edit-profile-container';
import SettingsScreen from '../components/business/settings/settings-container';
import CallAmbulanceScreen from '../components/business/call-ambulance/call-ambulance';
import SearchBlood from '../components/business/search-blood/search-blood';


// Import custom things
import { deviceRespectedSize } from '../utils/calcaulation';
import { CustomDrawerContent } from '../components/composite/custom-drawer-content';
import AsyncStorage from '@react-native-community/async-storage';
import { TOKEN } from '../constants/types';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerType='front'
      drawerStyle={{
        backgroundColor: 'rgb(127,127,127)',
        width: deviceRespectedSize(360)
      }}
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      drawerContentOptions={{
        itemStyle: {
          backgroundColor: 'rgb(127,127,127)'
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="home" component={HomeScreen} />
      <Drawer.Screen name="settings" component={SettingsScreen} />
      <Drawer.Screen name="profile" component={ProfileScreen} />
      <Drawer.Screen name="edit-profile" component={EditProfileScreen} />
      <Drawer.Screen name="call-ambulance" component={CallAmbulanceScreen} />
      <Drawer.Screen name="search-blood" component={SearchBlood} />
    </Drawer.Navigator>
  );
}

function Auth() {
  return <Stack.Navigator
    screenOptions={{
      headerTitleStyle: {
        display: 'none',
      },
      headerTransparent: true,
    }}
  >
    <Stack.Screen name="login" component={LoginScreen} />
  </Stack.Navigator>
}



export function App() {
  const { profile } = useSelector(state => state.profile)

  return (
    <NavigationContainer>
      {

        profile ? <MyDrawer /> : <Auth />

      }
    </NavigationContainer>
  );
}


