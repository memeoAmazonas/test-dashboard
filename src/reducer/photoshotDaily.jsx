import {
    FETCH_PHOTO_FAIL,
    FETCH_PHOTO_LIST,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_LIST_FAIL,
    FETCH_PHOTO_LIST_SUCCESS,
    FETCH_PHOTO_LIST_DETAILS,
    FETCH_PHOTO_LIST_FAIL_DETAILS,
    FETCH_PHOTO_LIST_SUCCESS_DETAILS
} from '../actions/types';

const INITIAL_STATE = {
    error: {},
    photoList: [],
    loading: false,
    loadingDetails: false,
    photoListDetail: [],
    photo: {}

};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PHOTO_SUCCESS:
            return {...state, photo: action.payload};
        case FETCH_PHOTO_LIST:
            return {...state, loading: true};
        case FETCH_PHOTO_LIST_SUCCESS:
            return {...state, photoList: action.payload, loading: false};
        case FETCH_PHOTO_LIST_DETAILS:
            return {...state, loadingDetails: true};
        case FETCH_PHOTO_LIST_SUCCESS_DETAILS:
            return {...state, photoListDetail: action.payload, loadingDetails: false};
        case FETCH_PHOTO_LIST_FAIL || FETCH_PHOTO_FAIL || FETCH_PHOTO_LIST_FAIL_DETAILS:
            return {...state, error: action.payload, loading: false, loadingDetails: false};
        default:
            return {...state};

    }
}



