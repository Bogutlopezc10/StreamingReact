import _ from 'lodash'

import {
    FETCH_USER_CONTENTS_BY_USERNAME,
    CURRENT_CONTENT_PLAYER
} from '../actions/types'


export default  (state = {}, action) => {

    switch(action.type){
        case FETCH_USER_CONTENTS_BY_USERNAME:
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case CURRENT_CONTENT_PLAYER:
            return {...state, [action.payload.userContentPlayer.id]: action.payload.userContentPlayer}
        default:
            return state;
    }
};