import * as React from 'react';
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


// Import custom things
import { deviceRespectedSize } from '../utils/calcaulation';
import { CustomDrawerContent } from '../components/composite/custom-drawer-content';

const Drawer = createDrawerNavigator();

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
      <Drawer.Screen name="login" component={LoginScreen} />
      <Drawer.Screen name="signup" component={SignUpScreen} />
      <Drawer.Screen name="profile" component={ProfileScreen} />
      <Drawer.Screen name="edit-profile" component={EditProfileScreen} />
    </Drawer.Navigator>
  );
}

export function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}


