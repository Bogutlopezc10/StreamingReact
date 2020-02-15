import _ from 'lodash';
import {
    FETCH_USERCOURSES_BY_USERNAME
} from '../actions/types';


const defaultState = {
    data:{},
    isSuccess:false,
    messageSuccess:null,
}

export default (state= defaultState, action) => {
    switch (action.type){
        case FETCH_USERCOURSES_BY_USERNAME:
            return {
                 ...state, 
                 data:{...state.data,..._.mapKeys(action.payload,'id')}
            };
        default:
            return state;
    }
}
