import {
    FETCH_PHOTO_SHOOTS_DAILY,
    FETCH_PHOTO_SHOOTS_DAILY_FAIL,
    FETCH_PHOTO_SHOOTS_DAILY_SUCCESS,
    FETCH_PHOTO_SHOOTS_DAILY_DETAIL,
    FETCH_PHOTO_SHOOTS_DAILY_FAIL_DETAIL,
    FETCH_PHOTO_SHOOTS_DAILY_SUCCESS_DETAIL
} from '../actions/types';

const INITIAL_STATE = {

    shotsDailyList: {list: [], userData: []},
    shotsDailyListError: {},
    shotsDailyListLoading: false,

    shotsDailyDetail: {},
    shotsDailyDetailError: {},
    shotsDailyDetailLoading: false,
};


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_PHOTO_SHOOTS_DAILY:
            return {...state, shotsDailyListLoading: true};
        case FETCH_PHOTO_SHOOTS_DAILY_SUCCESS:
            console.log(action.payload)
            return {...state, shotsDailyList: action.payload, shotsDailyListLoading: false};
        case FETCH_PHOTO_SHOOTS_DAILY_FAIL:
            return {...state, shotsDailyListLoading: false, shotsDailyListError: action.payload};
        case FETCH_PHOTO_SHOOTS_DAILY_DETAIL:
            return {...state, shotsDailyDetailLoading: true};
        case FETCH_PHOTO_SHOOTS_DAILY_SUCCESS_DETAIL:
            return {...state, shotsDailyDetail: action.payload, shotsDailyDetailLoading: false};
        case FETCH_PHOTO_SHOOTS_DAILY_FAIL_DETAIL:
            return {...state, shotsDailyDetailLoading: false, shotsDailyDetailError: action.payload};
        default:
        return { ...state }
    }
}
