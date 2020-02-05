import _ from 'lodash';
import {initialState} from '../initialState'
import {
    FETCH_CATEGORIES,
    UPDATE_SUCCESS_UNMOUNT
} from '../actions/types';


export default (state = initialState() , action) => {
    switch (action.type){
        case FETCH_CATEGORIES:
            return {
                ...state, 
                data:{...state.data,..._.mapKeys(action.payload,'id')}
           };
        case UPDATE_SUCCESS_UNMOUNT:
            return {
                ...state,
                isSuccess:false,
                messageSuccess:null
        };
        default:
            return state;
    }
}