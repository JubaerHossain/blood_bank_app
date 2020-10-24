import LocalizedStrings from 'react-native-localization';
import React from 'react';
import { Text } from 'react-native';
export const DEFAULT_LANGUAGE = 'en';

const translations = {
    en: {
        profile: 'Profile',
        settings: 'Settings',
        language: 'Language',
        ambulance_registration: 'Ambulance register',
        message: 'Message',
        help: 'Help',
        bss_facebook_page: 'BSS Facebook Page',
        rating: 'Rating',
        about_us: 'About Us',
        exit: 'Exit',

        enter_your_mobile: 'Enter your mobile number',
        mobile_number: 'Mobile number',
        welcome_back: 'Welcome to BSS!',
        otp: 'OTP',
        enter_otp: 'Enter OTP',
        verify_otp: 'Verify OTP',
        send_otp: 'Send OTP'
    },
    bn: {
        profile: 'প্রোফাইল',
        settings: 'সেটিংস',
        language: 'ভাষা',
        ambulance_registration: 'অ্যাম্বুলেন্স রেজিস্টার',
        message: 'মেসেজ',
        help: 'সাহায্য',
        bss_facebook_page: 'বি এস এস ফেসবুক পেজ',
        rating: 'রেটিং',
        about_us: 'আমাদের সম্পর্কে',
        exit: 'প্রস্থান',

        enter_your_mobile: 'আপনার মোবাইল নাম্বার প্রবেশ করান',
        mobile_number: 'মোবাইল নাম্বার',
        welcome_back: 'বি এস এস এ আপনাকে স্বাগতম!',
        otp: 'OTP',
        enter_otp: 'OTP প্রবেশ করান',
        verify_otp: 'ভেরিফাই OTP',
        send_otp: 'OTP পাঠান'
    },
};

export default new LocalizedStrings(translations);