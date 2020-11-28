/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';

import { Dimensions } from 'react-native';
// Custom import
import { withWhiteBackground } from '../../HOC/background';
import { Header } from '../../composite/header';
import { deviceRespectedSize } from '../../../utils/calcaulation';
import { SvgXml } from 'react-native-svg';
import ambulance from '../../../assets/icons/ambulance';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const SearchBlood = ({ navigation }) => {
  const { height, width } = Dimensions.get('window');
  const LATITUDE_DELTA = 0.28;
  const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

  const [latitude, setLatitude] = useState(23.7741);
  const [longitude, setLongitude] = useState(90.3645);
  const [text, setText] = useState(90.3645);
  const [focused, setFocused] = useState(false);
  const [markers] = useState([{
    title: 'Step rehabilitation Center(স্টেপ রিহ্যাবিলিটেশন সেন্টার)',
    coordinates: {
      latitude: 23.7741,
      longitude: 90.3645
    },
  },
  {
    title: 'Another hospital',
    coordinates: {
      latitude: 23.7850,
      longitude: 90.3750
    },
  }])

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
      <Header navigation={navigation} />
      <GooglePlacesAutocomplete
        placeholder='Enter Location'
        minLength={2}
        autoFocus={false}
        textInputProps={{
          onFocus: ()=> setFocused(true),
          onBlur: ()=> setFocused(false)
        }}
        returnKeyType={'default'}
        fetchDetails={true}
        styles={{
        textInputContainer: {
          backgroundColor: 'grey',
        },
        textInput: {
          height: 38,
          color: '#5d5d5d',
          fontSize: 16,
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
        container: {
          maxHeight: focused ? height:  45
        }
      }}
        onPress={(data, details = null) => {
        console.log('Here in onpress');
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
        query={{
        key: 'AIzaSyCMt1y_Eeg-1XBesU2WrFkl1F-f79IUdpg',
        language: 'en',
      }}
      />
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }}
        onPress={(event) => console.log(event.nativeEvent.coordinate)}
      >
        {
          markers.map(marker => <Marker
            coordinate={marker.coordinates}
            title={marker.title}
            onPress={(event) => { console.log('marker coordinate: ', event.nativeEvent.coordinate) }}
          />)
        }
      </MapView>
    </>
  );
};

export default withWhiteBackground(SearchBlood);
