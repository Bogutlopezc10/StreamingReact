import { FETCH_SUBJECTS } from '../actions/types';
import {initialState} from './initialState' 
import _ from 'lodash';

export default (state = initialState(), action) => {
    switch(action.type){
        case FETCH_SUBJECTS:
            return { ...state, data:{...state.data, ..._.mapKeys(action.payload,'id')}};
        default:
            return state;
    }
}