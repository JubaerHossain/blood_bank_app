/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image, StyleSheet, TextInput, Linking } from 'react-native';
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

import DropDownPicker from 'react-native-dropdown-picker';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BlackButton from '../../basic/buttons/black-button';
import ButtonTextWhite from '../../basic/texts/button-text-white';
import Loader from 'react-native-orientation-loading-overlay';


const SearchBlood = ({ navigation }) => {
  const { height, width } = Dimensions.get('window');
  const LATITUDE_DELTA = 0.28;
  const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

  const [latitude, setLatitude] = useState(23.7741);
  const [longitude, setLongitude] = useState(90.3645);
  const [text, setText] = useState(90.3645);
  const [focused, setFocused] = useState(false);
  const [country, setCountry] = useState('o_positive');
  const [phoneNumber, setPhoneNumber] = useState('+8801754552453');
  const [found, setFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const findDonner = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFound(true);
    }, 2000);
  }

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
      <Header navigation={navigation} Middle = {()=><Text style={{fontSize: 16, marginTop: 17, fontWeight: 'bold'}}>Search Blood</Text>} />
      {isLoading && <Loader
        visible={true}
        color="white"
        indicatorSize="large"
        messageFontSize={24}
        message="Searching for donner ..."
      />}

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

        <View style={{ width: deviceRespectedSize(380) }}>
          <DropDownPicker
            items={[
              { label: 'O+ (Positive)', value: 'o_positive', icon: () => <FontistoIcon name="blood-drop" size={18} color="red" />, hidden: true },
              { label: 'O- (Negative)', value: 'o_negative', icon: () => <FontistoIcon name="blood-drop" size={18} color="red" /> },
              { label: 'A+ (Positive)', value: 'a_positive', icon: () => <FontistoIcon name="blood-drop" size={18} color="red" /> },
              { label: 'A- (Negative)', value: 'a_negative', icon: () => <FontistoIcon name="blood-drop" size={18} color="red" /> },
              { label: 'B+ (Positive)', value: 'b_positive', icon: () => <FontistoIcon name="blood-drop" size={18} color="red" /> },
              { label: 'B- (Negative)', value: 'b_negative', icon: () => <FontistoIcon name="blood-drop" size={18} color="red" /> },
              { label: 'AB+ (Positive)', value: 'ab_positive', icon: () => <FontistoIcon name="blood-drop" size={18} color="red" /> },
              { label: 'AB- (Negative)', value: 'ab_negative', icon: () => <FontistoIcon name="blood-drop" size={18} color="red" /> },
            ]}
            defaultValue={country}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={item => setCountry(item.value)}
          />
        </View>
        <TouchableOpacity style={{ alignSelf: 'center', marginRight: 10 }} onPress={() => findDonner()}>
          <Icon name="search" size={18} color="black" />
        </TouchableOpacity>
      </View>

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
      {
        found && <View style={{ backgroundColor: '#DCE6F2', padding: 10 }}>
          <View style={{ display: 'flex', flexDirection: 'row', padding: 5 }}>
            <Text style={{ color: '#032062', fontSize: 15, fontWeight: 'bold', maxWidth: 200, textAlign: 'center', marginTop: 5 }}>Mr. Junayed want's to donate A +ve blood</Text>
            <BlackButton onPress={()=>{alert('This feature is not available yet')}}>
              <ButtonTextWhite>Confirm & Call</ButtonTextWhite>
            </BlackButton>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={{ fontSize: 15, marginTop: 5 }}>If not found call to <Text style={{ fontSize: 20, color: 'red' }}>Emergency Contact</Text></Text>
            <TouchableOpacity onPress={() => { Linking.openURL(`tel:${phoneNumber}`); }} style={{ backgroundColor: 'red', borderRadius: 20, height: 40, width: 40, alignItems: 'center', justifyContent: 'center', marginLeft: 5 }}>
              <Ionicons name="call" size={30} color="white" />
            </TouchableOpacity>

          </View>
        </View>
      }
    </>
  );
};

export default withWhiteBackground(SearchBlood);
