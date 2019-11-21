import superagent from 'superagent';

import {fetchPhotoList, fetchPhotoListDetails} from '../utils/urlApi';
import {
    FETCH_PHOTO_LIST,
    FETCH_PHOTO_LIST_DETAILS,
    FETCH_PHOTO_LIST_FAIL,
    FETCH_PHOTO_LIST_SUCCESS,
    FETCH_PHOTO_SUCCESS,
    FETCH_PHOTO_LIST_SUCCESS_DETAILS
} from './types';

export const getPhotoList = (limit, offset) => (dispatch) => {
    dispatch({
        type: FETCH_PHOTO_LIST
    });
    superagent
        .get(fetchPhotoList)
        .query({limit})
        .query({offset})
        .then(response => {
            dispatch({
                type: FETCH_PHOTO_LIST_SUCCESS,
                payload: response.body
            });
        })
        .catch(error => {
            console.log(error);
        });

};
export const getPhotoById = (id) => (dispatch) => {
    superagent
        .get(`${fetchPhotoList}${id}`)
        .then(response => {
            dispatch({
                type: FETCH_PHOTO_SUCCESS,
                payload: response.body
            });
        })
        .catch(error => {
            console.log(error);
        });

};
export const getPhotoListDetail = (limit, offset) => (dispatch) => {
    dispatch({
        type: FETCH_PHOTO_LIST_DETAILS
    });
    superagent
        .get(fetchPhotoListDetails)
        .query({limit})
        .query({offset})
        .then(response => {
            dispatch({
                type: FETCH_PHOTO_LIST_SUCCESS_DETAILS,
                payload: response.body
            });
        })
        .catch(error => {
            console.log(error);
        });

};
export const getPhotoDetailById = (id) => (dispatch) => {
    dispatch({
        type: FETCH_PHOTO_DETAILS
    });
    superagent
        .get(`${fetchPhotoListDetails}${id}`)
        .then(response => {
            dispatch({
                type: FETCH_PHOTO_SUCCESS_DETAILS,
                payload: response.body
            });
        })
        .catch(error => {
            console.log(error);
        });

};
