import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignUpScreen from '../components/business/sign-up/sign-up-container';
import LoginScreen from '../components/business/login/login-container';
import ExploreTab from '../components/business/home/explore';


const Stack = createStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            display: 'none',
          },
          headerTransparent: true,
        }}>
        <Stack.Screen name="home" component={ExploreTab} />
        <Stack.Screen name="signup" component={SignUpScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
