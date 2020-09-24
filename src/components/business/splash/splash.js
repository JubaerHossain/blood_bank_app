// / eslint-disable react-hooks/exhaustive-deps /
import React, {
    useEffect,
    useState
} from 'react';
import {
    SafeAreaView,
    Image
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './style';
import {
    TOKEN,
} from '../../../constants/types';
import {
    useDispatch
} from 'react-redux';

import style from '../splash/style';
const Splash = ({
    navigation
}) => {
    const [isLoading, setIsloading] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        async function getAsyncData() {
            try {
                const token = await AsyncStorage.getItem(TOKEN);
                if (token) {
                   navigation.navigate('home')
                } else {
                    navigation.navigate('login')
                }
                SplashScreen.hide();
            } catch (error) {
                console.log(error);
            }
        }
        getAsyncData();
    }, [])

    return (<SafeAreaView style = {
            styles.container
        } >
       </SafeAreaView>
    );
};

export default Splash;