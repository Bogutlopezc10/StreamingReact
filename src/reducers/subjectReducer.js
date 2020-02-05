import { FETCH_SUBJECTS } from '../actions/types';
import _ from 'lodash';

const defaultState = {
    data: {},
    isSuccess: false,
    messageSuccess: null
}

export default (state = defaultState, action) => {
    switch(action.type){
        case FETCH_SUBJECTS:
            return { ...state, data:{...state.data, ..._.mapKeys(action.payload,'id')}};
        default:
            return state;
    }
}