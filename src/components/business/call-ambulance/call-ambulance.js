/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { ScrollView } from 'react-native-gesture-handler';

// Custom import
import { withWhiteBackground } from '../../HOC/background';
import { Header } from '../../composite/header';
import { deviceRespectedSize } from '../../../utils/calcaulation';
import { SvgXml } from 'react-native-svg';
import ambulance from '../../../assets/icons/ambulance';

const CallAmbulance = ({ navigation }) => {

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
      <Header navigation={navigation} />
      <ScrollView>
        <View>
          <Text>
            Call ambulance page.
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default withWhiteBackground(CallAmbulance);
