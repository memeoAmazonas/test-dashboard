import superagent from 'superagent';

import {fetchPhotoList, fetchPhotoListDetails} from '../utils/urlApi';
import {
    FETCH_PHOTO_SHOOTS_DAILY,
    FETCH_PHOTO_SHOOTS_DAILY_FAIL,
    FETCH_PHOTO_SHOOTS_DAILY_SUCCESS,
    FETCH_PHOTO_SHOOTS_DAILY_DETAIL,
    FETCH_PHOTO_SHOOTS_DAILY_FAIL_DETAIL,
    FETCH_PHOTO_SHOOTS_DAILY_SUCCESS_DETAIL
} from './types';

export const photoshootsDaily = (...params) => dispatch => {
    if (params.length === 1) {

        dispatch({type: FETCH_PHOTO_SHOOTS_DAILY_DETAIL});

        superagent.get(`${fetchPhotoList}${params[0]}`)
            .then(response => {
                dispatch({
                    type: FETCH_PHOTO_SHOOTS_DAILY_SUCCESS_DETAIL,
                    payload: response.body
                });
            })
            .catch(error => {
                dispatch({
                    type: FETCH_PHOTO_SHOOTS_DAILY_FAIL_DETAIL,
                    payload: response.body
                });
            });
    } else {
        dispatch({type: FETCH_PHOTO_SHOOTS_DAILY});
        superagent
            .get(fetchPhotoList)
            .query({limit: params[0]})
            .query({offset: params[1]})
            .then(response => {
                dispatch({
                    type: FETCH_PHOTO_SHOOTS_DAILY_SUCCESS,
                    payload: response.body
                });
            })
            .catch(error => {
                dispatch({
                    type: FETCH_PHOTO_SHOOTS_DAILY_FAIL,
                    payload: response.body
                });
            });
    }
};

export const photoshootsDetails = (...params) => dispatch => {
    if (params.length === 1) {
        dispatch({type: FETCH_PHOTO_SHOOTS_DETAIL});
        superagent.get(`${fetchPhotoListDetails}${params[0]}`)
            .then(response => {
                dispatch({
                    type: FETCH_PHOTO_SHOOTS_DETAIL_SUCCESS,
                    payload: response.body
                });
            })
            .catch(error => {
                dispatch({
                    type: FETCH_PHOTO_SHOOTS_DETAIL_FAIL,
                    payload: response.body
                });
            });
    } else {
         dispatch({type: FETCH_PHOTO_SHOOTS_DETAIL_DETAIL});
        superagent
            .get(fetchPhotoListDetails)
            .query({limit: params[0]})
            .query({offset: params[1]})
            .then(response => {
                dispatch({
                    type: FETCH_PHOTO_SHOOTS_DETAIL_SUCCESS_DETAIL,
                    payload: response.body
                });
            })
            .catch(error => {
                dispatch({
                    type: FETCH_PHOTO_SHOOTS_DETAIL_FAIL_DETAIL,
                    payload: response.body
                });
            });
    }
};
