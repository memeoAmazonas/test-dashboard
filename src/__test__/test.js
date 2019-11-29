import expect from 'expect';
import { photoshootsDaily} from '../actions';
import {FETCH_PHOTO_SHOOTS_DAILY_SUCCESS} from '../actions/types';

test('actions ', () => {
    const payload = {
        list:[
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
                    tuesday: 1,
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
            },
            {
                name: 'Total',
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

        ],
        userData: [{
            day: {friday: 0,
                monday: 0,
                saturday: 0,
                sunday: 0,
                thursday: 0,
                tuesday: 1,
                wednesday: 0,
            },
            name: "96"
        }]
    };
    const expectAction = {
        type: FETCH_PHOTO_SHOOTS_DAILY_SUCCESS,
        payload
    }
    expect(photoshootsDaily(1,1)).toBe(expectAction);
});
