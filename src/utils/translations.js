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
        send_otp: 'Send OTP',

        name: 'Name',
        enter_your_name: 'Enter your name',
        second_mobile: 'Second Mobile',
        enter_your_second_mobile_number: 'Enter your second mobile number',
        date_of_birth: 'Date of birth',
        enter_date_of_birth: 'Enter date of birth',
        permanent_address: 'Permanent Address',
        enter_your_permanent_address: 'Enter your permanent address',
        present_address: 'Present Address',
        enter_your_present_address: 'Enter your present address',
        educational_qualification: 'Educational Qualification',
        enter_your_educational_qualification: 'Enter your educational qualification',
        last_donation_date: 'Last Donation Date',
        enter_your_last_donation: 'Enter your last donation',
        save_changes: 'Save changes',
        previous: 'Previous',
        next: 'Next',
        edit_profile: 'Edit profile',
        change: 'Change'
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
        send_otp: 'OTP পাঠান',


        name: 'নাম',
        enter_your_name: 'আপনার নাম প্রবেশ করান',
        second_mobile: 'দ্বিতীয় মোবাইল',
        enter_your_second_mobile_number: 'আপনার দ্বিতীয় মোবাইল প্রবেশ করান',
        date_of_birth: 'জন্মতারিখ',
        enter_date_of_birth: 'জন্মতারিখ প্রবেশ করান',
        permanent_address: 'স্থায়ী ঠিকানা',
        enter_your_permanent_address: 'স্থায়ী ঠিকানা প্রবেশ করান',
        present_address: 'বর্তমান ঠিকানা',
        enter_your_present_address: 'আপনার বর্তমান ঠিকানা প্রবেশ করান',
        educational_qualification: 'শিক্ষাগত যোগ্যতা',
        enter_your_educational_qualification: 'আপনার শিক্ষাগত যোগ্যতা প্রবেশ করান',
        last_donation_date: 'শেষ রক্তদানের তারিখ',
        enter_your_last_donation: 'আপনার শেষ রক্তদানের তারিখ প্রবেশ করান',
        save_changes: 'পরিবর্তন সঞ্চয় করুন',
        previous: 'পুর্বে যান',
        next: 'পরে যান',
        edit_profile: 'প্রোফাইল সম্পাদন',
        change: 'পরিবর্তন'
    },
};

export default new LocalizedStrings(translations);