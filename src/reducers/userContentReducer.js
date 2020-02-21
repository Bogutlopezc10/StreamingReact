import _ from 'lodash'

import {
    FETCH_USER_CONTENTS_BY_USERNAME,
    FETCH_USER_CONTENT_BY_USERNAME_CONTENT_ID
} from '../actions/types'


export default  (state = {}, action) => {

    switch(action.type){
        case FETCH_USER_CONTENTS_BY_USERNAME:
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case FETCH_USER_CONTENT_BY_USERNAME_CONTENT_ID:
            return {...state, [action.payload.id]: action.payload}
        default:
            return state;
    }
};