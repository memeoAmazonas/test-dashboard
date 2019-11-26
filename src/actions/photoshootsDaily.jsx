import _ from 'lodash';
import superagent from 'superagent';

import { dayOfWeek, column } from '../utils/data';
import { fetchPhotoList, fetchPhotoListDetails } from '../utils/urlApi';
import {
    FETCH_PHOTO_SHOOTS_DETAIL,
    FETCH_PHOTO_SHOOTS_DETAIL_FAIL,
    FETCH_PHOTO_SHOOTS_DETAIL_SUCCESS,
    FETCH_PHOTO_SHOOTS_DETAIL_DETAIL,
    FETCH_PHOTO_SHOOTS_DETAIL_FAIL_DETAIL,
    FETCH_PHOTO_SHOOTS_DETAIL_SUCCESS_DETAIL,
    FETCH_PHOTO_SHOOTS_DAILY,
    FETCH_PHOTO_SHOOTS_DAILY_FAIL,
    FETCH_PHOTO_SHOOTS_DAILY_SUCCESS,
    FETCH_PHOTO_SHOOTS_DAILY_DETAIL,
    FETCH_PHOTO_SHOOTS_DAILY_FAIL_DETAIL,
    FETCH_PHOTO_SHOOTS_DAILY_SUCCESS_DETAIL

} from './types';

export const photoshootsDaily = (...params) => dispatch => {
    if (params.length === 1) {

        dispatch({ type: FETCH_PHOTO_SHOOTS_DAILY_DETAIL });

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
        dispatch({ type: FETCH_PHOTO_SHOOTS_DAILY });
        superagent
            .get(fetchPhotoList)
            .query({ limit: params[0] })
            .query({ offset: params[1] })
            .then(response => {
                dispatch({
                    type: FETCH_PHOTO_SHOOTS_DAILY_SUCCESS,
                    payload: setData(response.body)
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
        dispatch({ type: FETCH_PHOTO_SHOOTS_DETAIL });
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
                    payload: error
                });
            });
    } else {
        dispatch({ type: FETCH_PHOTO_SHOOTS_DETAIL_DETAIL });
        superagent
            .get(fetchPhotoListDetails)
            .query({ limit: params[0] })
            .query({ offset: params[1] })
            .then(response => {
                dispatch({
                    type: FETCH_PHOTO_SHOOTS_DETAIL_SUCCESS_DETAIL,
                    payload: response.body
                });
            })
            .catch(error => {
                dispatch({
                    type: FETCH_PHOTO_SHOOTS_DETAIL_FAIL_DETAIL,
                    payload: error
                });
            });
    }
};
const setData = (paramList) => {
    let arr = [];
    let list =
        [
            {
                name: 'Real Estate',
                day: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 0,
                    saturday: 0,
                    sunday: 0
                }
            },
            {
                name: 'Food',
                day: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 0,
                    saturday: 0,
                    sunday: 0
                }
            },
            {
                name: 'Event',
                day: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 0,
                    saturday: 0,
                    sunday: 0
                }
            },
            {
                name: 'Other',
                day: {
                    monday: 0,
                    tuesday: 0,
                    wednesday: 0,
                    thursday: 0,
                    friday: 0,
                    saturday: 0,
                    sunday: 0
                }
            }
        ];
    let users = {};
    let userData = [];
    column.forEach(it => arr.push(paramList.filter(item => item.type === it)));
    for (let i = 0; i < arr.length; i++) {
        arr[i].forEach(
            item => {
                let key = (item.day_of_the_week).toLowerCase();
                if (item.client_id in users) {
                    users[item.client_id].day[key] += 1;
                    users[item.client_id].total += 1;
                } else {
                    users[item.client_id] = {
                        day: {
                            monday: 0,
                            tuesday: 0,
                            wednesday: 0,
                            thursday: 0,
                            friday: 0,
                            saturday: 0,
                            sunday: 0
                        },
                        total: 0,
                    };
                    users[item.client_id].day[key] += 1;
                    users[item.client_id].total += 1;
                }
                list[i].day[(item.day_of_the_week).toLowerCase()] += 1;
            });
    }
    _.keys(users).forEach(id => {
        let user = {
            name: id,
            day: users[id].day
        };
        userData.push(user);
    });

    return {list, userData}
};