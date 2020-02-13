import { 
    FETCH_QUESTIONS_BY_COURSE_ID
 } from '../actions/types'; 
import _ from 'lodash';

const defaultState = {
    data:{},
    isSuccess:false,
    messageSuccess:null,
    isCreating:false,
    isEditing:false,
}

export default (state = defaultState, action) => {
    switch(action.type){
        case FETCH_QUESTIONS_BY_COURSE_ID:
            return { ...state, data:{...state.data, ..._.mapKeys(action.payload,'id')}};
        default:
            return state;
    }
}