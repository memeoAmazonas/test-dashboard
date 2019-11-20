import { DUMMY } from '../actions/types';

const INITIAL_STATE = {
    dummy: ""
}
export default (state = INITIAL_STATE, action) => {
    return { ...state, dummy: action.payload }
};
