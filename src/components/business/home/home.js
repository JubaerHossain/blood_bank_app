/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import {View, Text, StatusBar} from 'react-native';

import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

import {HeaderIcon} from '../../basic/index';
import {withWhiteBackground} from '../../HOC/background';
import ListingCard from '../../composite/listing-card/card';
import Modal from '../../composite/modal';

const recentDicounts = [
  {
    category: 'smartphones',
    offerHeadline: 'Airpod free with iphone',
    endDate: new Date(),
    startDate: new Date(),
    followers: 345,
    shopAddress: 'Uttara, Dhaka',
    offerDetails: 'This is about offer details',
    brand: {name: 'Apex'},
    picture: {
      uri:
        'https://user-images.githubusercontent.com/18731391/81410202-2910a280-9162-11ea-9f64-5849aa8bb0c5.jpg',
      width: 500,
      height: 500,
      mime: 'image/jpeg',
    },
  },
  {
    category: 'hotel & resorts',
    offerHeadline: '50% discount at Mermaid',
    endDate: new Date(),
    startDate: new Date(),
    followers: 345,
    brand: {name: 'Bata'},
    shopAddress: 'All branch in Rajshahi',
    offerDetails: 'This is about offer details',
    picture: {
      uri:
        'https://user-images.githubusercontent.com/18731391/81410544-beac3200-9162-11ea-9114-c08b56bf93f8.jpg',
      width: 500,
      height: 500,
      mime: 'image/jpeg',
    },
  },
  {
    category: 'smartphones',
    offerHeadline: 'Airpod free with iphone',
    endDate: new Date(),
    startDate: new Date(),
    followers: 345,
    brand: {name: 'Afzal'},
    shopAddress: 'All branch in Barishal',
    offerDetails: 'This is about offer details',
    picture: {
      uri:
        'https://user-images.githubusercontent.com/18731391/81410750-15197080-9163-11ea-9c54-bfd1a0223356.jpg',
      width: 500,
      height: 500,
      mime: 'image/jpeg',
    },
  },
];

const bell = `
<svg width="13px" height="15px" viewBox="0 0 13 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>icon_bell</title>
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Listing-Card" transform="translate(0.000000, -263.000000)" fill="#008489">
            <g id="icon_bell/icon_bell" transform="translate(0.000000, 263.000000)">
                <g id="notification">
                    <g id="icon_bell/green">
                        <g id="Group-2">
                            <path d="M6.144012,14.976 C6.99264,14.976 7.680024,14.288652 7.680024,13.439988 L4.608036,13.439988 C4.608,14.288652 5.295384,14.976 6.144012,14.976 Z" id="Path" fill-rule="nonzero"></path>
                            <path d="M10.752012,10.368 L10.752012,6.527988 C10.752012,4.166388 9.496332,2.196468 7.296012,1.674216 L7.296012,1.152 C7.296012,0.514548 6.781464,1.33226763e-14 6.144012,1.33226763e-14 C5.50656,1.33226763e-14 4.992012,0.514548 4.992012,1.152 L4.992012,1.674252 C2.791692,2.196504 1.536012,4.166424 1.536012,6.528024 L1.536012,10.368 L2.04281037e-14,11.904012 L2.04281037e-14,12.672 L12.287988,12.672 L12.287988,11.904012 L10.752012,10.368 Z" id="Path" fill-rule="nonzero"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>
`;

const categories = `
<svg width="18px" height="16px" viewBox="0 0 18 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>icon_categories</title>
    <g id="User's-flow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Listing" transform="translate(-371.000000, -47.000000)" fill="#222222">
            <g id="icon_categories" transform="translate(371.000000, 47.000000)">
                <g id="Group">
                    <rect id="Rectangle" x="0" y="0" width="18" height="1.71428571"></rect>
                    <rect id="Rectangle-Copy" x="6.75" y="6.85714286" width="11.25" height="1.71428571"></rect>
                    <rect id="Rectangle-Copy-3" x="3.375" y="13.7142857" width="14.625" height="1.71428571"></rect>
                </g>
            </g>
        </g>
    </g>
</svg>
`;

const search = `
<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Search icon</title>
    <g id="User's-flow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Listing" transform="translate(-315.000000, -47.000000)" fill="#222222">
            <g id="Search-icon" transform="translate(315.000000, 47.000000)">
                <g id="search">
                    <path d="M7.2,0 C11.1701961,0 14.4,3.23002741 14.4,7.2 C14.4,8.9620481 13.7638087,10.5782573 12.7090537,11.8309999 L15.8181374,14.940479 C16.0606209,15.1827541 16.0606209,15.5758695 15.8181374,15.8181446 C15.6968808,15.9393716 15.5379887,16 15.3793053,16 C15.2204132,16 15.0617,15.9393716 14.9404732,15.8181446 L14.9404732,15.8181446 L11.8309999,12.7090537 C10.5782573,13.7638087 8.9620481,14.4 7.2,14.4 C3.23002741,14.4 0,11.1701961 0,7.2 C0,3.23002741 3.23002741,0 7.2,0 Z M7.2,1.32923175 C3.96288353,1.32923175 1.32923175,3.96291546 1.32923175,7.20003193 C1.32923175,10.4371484 3.96288353,13.0708002 7.2,13.0708002 C10.4371165,13.0708002 13.0707682,10.4371165 13.0707682,7.2 C13.0707682,3.96288353 10.4371165,1.32923175 7.2,1.32923175 Z" id="Combined-Shape" fill-rule="nonzero"></path>
                </g>
            </g>
        </g>
    </g>
</svg>
`;

const oval = `
<svg width="3px" height="3px" viewBox="0 0 3 3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Oval</title>
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dot-seperator" fill="#767676">
            <circle id="Oval" cx="1.5" cy="1.5" r="1.5"></circle>
        </g>
    </g>
</svg>
`;

const backArrow = `
<svg width="7px" height="13px" viewBox="0 0 7 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>Back arrow</title>
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Back-arrow" fill="#000000" fill-rule="nonzero">
            <g transform="translate(3.500000, 6.500000) rotate(-180.000000) translate(-3.500000, -6.500000) " id="Chevron_Right_1_">
                <path d="M6.8141466,6.03602661 L1.09695956,0.191905225 C0.846093213,-0.0639684082 0.439649609,-0.0639684082 0.188149761,0.191905225 C-0.0627165869,0.447778857 -0.0627165869,0.863384574 0.188149761,1.11925821 L5.45185576,6.49967611 L0.188783261,11.880094 C-0.062083086,12.1359676 -0.062083086,12.5515734 0.188783261,12.8080948 C0.439649609,13.0639684 0.846726714,13.0639684 1.09759306,12.8080948 L6.8147801,6.96397339 C7.06184545,6.71074487 7.06184545,6.28860735 6.8141466,6.03602661 Z"></path>
            </g>
        </g>
    </g>
</svg>
`;

const CategoryWiseExploreTab = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const {goBack} = navigation;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
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
          position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              paddingTop: 39,
              paddingLeft: 36,
              display: 'flex',
              flexDirection: 'row',
            }}
            onPress={() => goBack()}>
            <HeaderIcon xml={backArrow} padding={8} />
          </TouchableOpacity>
          <View
            style={{
              paddingTop: 19,
              paddingRight: 26,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('search')}
              style={{marginRight: 40, paddingTop: 20, paddingLeft: 10}}>
              <HeaderIcon xml={search} padding={10} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{height: 50, width: 50, paddingLeft: 10, paddingTop: 20}}
              onPress={() => toggleModal()}>
              <HeaderIcon xml={categories} padding={10} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            marginLeft: 24,
            marginRight: 23,
          }}>
          <View style={{width: 291, marginTop: 107}}>
            <Text
              style={{
                lineHeight: 40,
                fontSize: 32,
                letterSpacing: -0.65,
                color: 'rgb(0,132,137)',
                marginBottom: 48,
              }}>
              Shirts
            </Text>
          </View>
          {recentDicounts.map((item, indx) => (
            <ListingCard
              item={item}
              key={indx}
              SvgIcon={HeaderIcon}
              oval={oval}
              eyeOrBell={bell}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default withWhiteBackground(CategoryWiseExploreTab);
