import { SEARCH_CAR, SEARCH_DONNER, SEARCH_LOADING, SET_COORDINATE } from '../action-types/search.types';

const initialState = {
    coordinate: {},
    isLoading: false,
    donner: {},
    ambulance: {}
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case SEARCH_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case SET_COORDINATE:
            return {
                ...state,
                isLoading: false,
                coordinate: payload
            };
        case SEARCH_DONNER:
            return {
                ...state,
                isLoading: false,
                donner: payload
            };
        default:
            return state;
    }
}
