import { SET_PROFILE_SUCCESS, SET_PROFILE_FAILED, PROFILE_LOADING } from '../action-types/profile.types';

const initialState = {
    profile: null,
    error: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case PROFILE_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case SET_PROFILE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                profile: payload
            };
        case SET_PROFILE_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            };
        default:
            return state;
    }
}
