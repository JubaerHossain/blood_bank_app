import { SET_PROFILE_SUCCESS, SET_PROFILE_FAILED, PROFILE_LOADING } from '../action-types/profile.types';
import { setAppState } from './app-state.actions';
import { SHOPPER } from '../constants/types';
import axios from '../utils/axios';

const profile = {
    "id": 1,
    "name": null,
    "mobile_one": "01754552453",
    "mobile_two": null,
    "picture": "public/uploads/profile/default.jpg",
    "date_of_birth": "01458975",
    "present_address": "Mohammadpur, Dhaka",
    "permanent_address": null,
    "educational_qualification": null,
    "last_donation_date": null,
    "otp": "$2y$10$1PhFYOrIu0OFgptt.n2WA.rMnO.AO9TaDLC29hx81jYtbzLKopEDu",
    "blood_group": "O+",
    "longitude": "90.358360",
    "latitude": "23.765844",
    "religion": "Islam",
    "extra_otp": "12345678",
    "device_token": "f1UIJTc7QZy-RqYdiyzfyl:APA91bFTEr0gs6i59CWliixg71gYivt6tcXf08Uai-5jWM0kpipR-HC-HPPcnKMSdeou7YYq11-37bfKsCjPhbUWmd5B9pq5E6srbc3_CRu6niewruQX43l2IH6sTeeSIi_Aiu1AQcz8",
    "login_access": 1,
    "status": 1,
    "created_at": "2020-09-22T06:44:36.000000Z",
    "updated_at": "2020-09-22T06:44:36.000000Z"
}

export const profileLoading = () => ({
    type: PROFILE_LOADING,
});

const setProfileSuccess = (profile) => ({
    type: SET_PROFILE_SUCCESS,
    payload: profile
});

const setProfileFailed = (error) => ({
    type: SET_PROFILE_FAILED,
    payload: error
});

export const sendOTPAction = async (dispatch, mobile) => {
    dispatch(profileLoading());
    return true;
};

export const verifyOTPAction = async (dispatch, credential) => {
    dispatch(profileLoading());
    try {
        dispatch(setProfileSuccess(profile));
    } catch (error) {
        console.log(error)
    }

    return true;
};
