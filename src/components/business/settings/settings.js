import React, { useContext, useLayoutEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Text, StatusBar, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { Header } from '../../composite/header';
import { LocalizationContext } from '../../../utils/localization-context';
import { ENGLISH, BENGALI } from '../../../constants/types';
import { deviceRespectedSize } from '../../../utils/calcaulation';


const Settings = ({ navigation }) => {
    const {
        translations,
        setAppLanguage,
    } = useContext(LocalizationContext);

    return (
        <>

            <Header navigation={navigation} />
            <StatusBar barStyle="dark-content" />

            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <TouchableOpacity
                    style={{
                        height: deviceRespectedSize(50),
                        backgroundColor: '#4E81BD',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: deviceRespectedSize(80),
                    }}
                    onPress={() => { setAppLanguage(BENGALI) }}>
                    <Text
                        style={{
                            color: 'rgb(255, 255, 255)',
                            alignSelf: 'center',
                            fontSize: 16,
                            letterSpacing: -0.14,
                            fontFamily: 'CircularStd-Medium',
                        }}
                    >বাংলা</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: deviceRespectedSize(50),
                        backgroundColor: '#4E81BD',
                        borderRadius: 5,
                        justifyContent: 'center',
                        width: deviceRespectedSize(80),
                        marginTop: deviceRespectedSize(10)
                    }}
                    onPress={() => { setAppLanguage(ENGLISH) }}>
                    <Text
                        style={{
                            color: 'rgb(255, 255, 255)',
                            alignSelf: 'center',
                            fontSize: 16,
                            letterSpacing: -0.14,
                            fontFamily: 'CircularStd-Medium',
                        }}
                    >English</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default Settings;
