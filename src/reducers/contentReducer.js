import { FETCH_CONTENTS, FETCH_CONTENT } from '../actions/types';
import {initialState} from './initialState' 
import _ from 'lodash';

export default (state = initialState(), action) => {
    switch(action.type){
        case FETCH_CONTENTS:
            return { ...state, data:{...state.data, ..._.mapKeys(action.payload,'id')}};

        case FETCH_CONTENT:
            return {
                ...state,
                data:{...state.data, [action.payload.id]:action.payload}
            }
        default:
            return state;
    }
}