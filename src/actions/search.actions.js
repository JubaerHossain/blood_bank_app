import {
    SEARCH_LOADING,
    SEARCH_DONNER_SUCCESS,
    SEARCH_DONNER_FAILED,
} from '../action-types/search.types';
import axios from '../utils/axios';

export const setLoading = () => ({
    type: SEARCH_DONNER,
});

export const searchDonnerSuccess = (donner) => ({
    type: SEARCH_DONNER_SUCCESS,
    payload: donner
});

export const searchDonnerFail = (error) => ({
    type: SEARCH_DONNER,
    payload: error
});


export const searchDonner = async (dispatch, coordinate) => {
    try {        
        dispatch(setLoading());
        const {data} = await axios.post('/api/auth/login', coordinate);
        dispatch(searchDonnerSuccess(data))
        return response.data;
    } catch (error) {
        dispatch(searchDonnerFail(error));
    }
};
