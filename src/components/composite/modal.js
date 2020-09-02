/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { SvgXml } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';

import { ScrollView } from 'react-native-gesture-handler';
import { deviceRespectedSize } from '../../utils/calcaulation';

const cross = `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 27C21.1797 27 27 21.1797 27 14C27 6.8203 21.1797 1 14 1C6.8203 1 1 6.8203 1 14C1 21.1797 6.8203 27 14 27Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.9701 8.24213L19.7579 7.02995L14 12.7878L8.24213 7.02995L7.02995 8.24213L12.7878 14L7.02995 19.7579L8.24213 20.9701L14 15.2122L19.7579 20.9701L20.9701 19.7579L15.2122 14L20.9701 8.24213Z" fill="white"/>
</svg>
`;

const categories = [
  {
    name: 'Profile',
    icon: 'person-circle-outline',
  },
  {
    name: 'Settings',
    icon: 'settings-outline',
  },
  {
    name: 'Message',
    icon: 'chatbox-ellipses-outline',
  },
  {
    name: 'Help',
    icon: 'help-circle-outline',
  },
  {
    name: 'Facebook',
    icon: 'logo-facebook',
  },
];

export default function ({ isModalVisible, toggleModal, navigation }) {
  return (
    <Modal
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      animationOutTiming={300}
      isVisible={isModalVisible}>
      <View style={{ flex: 1 }}>
        <View style={{ alignSelf: 'flex-start' }}>
          <View
            style={{
              width: 331,
              backgroundColor: 'rgb(127, 127, 127)',
              top: -20,
              left: - deviceRespectedSize(20),
              height: '104%',
            }}>
            <TouchableOpacity
              onPress={() => {
                toggleModal();
              }}
              style={{ alignSelf: 'flex-end', marginTop: 40, marginRight: 21 }}>
              <SvgXml xml={cross} />
            </TouchableOpacity>
            <ScrollView>
              <View style={{ alignSelf: 'center' }}>
                <Image
                  style={{
                    height: deviceRespectedSize(70),
                    width: deviceRespectedSize(70),
                    borderRadius: 35,
                    marginTop: deviceRespectedSize(5),
                  }}
                  source={require('../../assets/images/pp.jpg')}
                />
              </View>
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
              {categories.map(item => (
                <TouchableOpacity
                  onPress={() => {
                    toggleModal();
                  }}
                  key={item.name}>
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      marginLeft: 21,
                      marginTop: 19,
                    }}>
                    <View style={{ marginRight: 10 }}>
                      <Icon
                        name={item.icon}
                        size={20}
                        color='#000'
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 18,
                          letterSpacing: -0.37,
                          color: 'rgb(0,0,0)',
                          marginRight: 8,
                          fontFamily: 'CircularStd-Book',
                          lineHeight: 21,
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      borderBottomColor: 'rgb(26,26,26)',
                      borderBottomWidth: 1,
                      marginTop: 20,
                    }}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </Modal>
  );
}
