/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';

const Home = ({ navigation }) => {

  const { profile } = useSelector(state => state.profile)

  useEffect(()=>{
    const { name } = profile;
    !name && navigation.navigate('edit-profile');
  }, [profile])



  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
      <Header navigation={navigation} />
      <ScrollView>
        <View
          style={{
            marginLeft: 24,
            marginRight: 23,
          }}>
          <View>
            <Image
              style={{
                height: deviceRespectedSize(300),
                width: deviceRespectedSize(400),
                marginTop: deviceRespectedSize(5),
              }}
              source={require('../../../assets/images/blood.jpg')}
            />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 50, marginRight: 50 }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('search-blood')}
            >
              <View style={{ backgroundColor: 'rgb(190, 204, 229)', height: deviceRespectedSize(100), width: deviceRespectedSize(100), borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Fontisto name='blood-drop' color='red' size={70} />
              </View>
              <Text
                style={{
                  fontSize: 14,
                  letterSpacing: -0.37,
                  color: 'rgb(0,0,0)',
                  fontFamily: 'CircularStd-Book',
                  lineHeight: 21,
                  textAlign: 'center'
                }}
              >Search Blood</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('call-ambulance')}
            >
              <View style={{ backgroundColor: 'rgb(190, 204, 229)', height: deviceRespectedSize(100), width: deviceRespectedSize(100), borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                <SvgXml xml={ambulance} height={95} />
              </View>
              <Text style={{
                fontSize: 14,
                letterSpacing: -0.37,
                color: 'rgb(0,0,0)',
                fontFamily: 'CircularStd-Book',
                lineHeight: 21,
                textAlign: 'center'
              }}>Call Ambulance</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image
            style={{
              height: deviceRespectedSize(300),
            }}
            source={require('../../../assets/images/lower_background.jpg')}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default withWhiteBackground(Home);
