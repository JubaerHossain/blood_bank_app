/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Octicons';


import { withWhiteBackground } from '../../HOC/background';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from '../../composite/modal';
import { deviceRespectedSize } from '../../../utils/calcaulation';

const ExploreTab = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const dispatch = useDispatch();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F2F2F2" />
      <Modal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        navigation={navigation}
      />
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
            onPress={() => toggleModal()}
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
          </View>
      </ScrollView>
    </>
  );
};

export default withWhiteBackground(ExploreTab);
