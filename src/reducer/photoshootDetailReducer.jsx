import {
    FETCH_PHOTO_SHOOTS_DETAIL,
    FETCH_PHOTO_SHOOTS_DETAIL_FAIL,
    FETCH_PHOTO_SHOOTS_DETAIL_SUCCESS,
    FETCH_PHOTO_SHOOTS_DETAIL_DETAIL,
    FETCH_PHOTO_SHOOTS_DETAIL_FAIL_DETAIL,
    FETCH_PHOTO_SHOOTS_DETAIL_SUCCESS_DETAIL
} from '../actions/types';

const INITIAL_STATE = {

    shotsDetailList: [],
    shotsDetailListError: {},
    shotsDetailListLoading: false,

    shotsDetail: {},
    shotsDetailError: {},
    shotsDetailLoading: false,
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PHOTO_SHOOTS_DETAIL:
            return {...state, shotsDetailListLoading: true};
        case FETCH_PHOTO_SHOOTS_DETAIL_SUCCESS:
            return {...state, shotsDetailList: action.payload, shotsDetailListLoading: false};
        case FETCH_PHOTO_SHOOTS_DETAIL_FAIL:
            return {...state, shotsDetailListLoading: false, shotsDetailListError: action.payload};
        case FETCH_PHOTO_SHOOTS_DETAIL_DETAIL:
            return {...state, shotsDetailLoading: true};
        case FETCH_PHOTO_SHOOTS_DETAIL_SUCCESS_DETAIL:
            return {...state, shotsDetail: action.payload, shotsDetailLoading: false};
        case FETCH_PHOTO_SHOOTS_DETAIL_FAIL_DETAIL:
            return {...state, shotsDetailLoading: false, shotsDetailError: action.payload};
        default:
        return { ...state }
    }
}