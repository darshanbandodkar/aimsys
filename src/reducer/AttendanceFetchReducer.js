import { ATTENDANCEFETCH } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ATTENDANCEFETCH:
         return action.payload;
        default:
            return state;
    }
};  