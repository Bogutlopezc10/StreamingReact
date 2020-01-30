import _ from 'lodash';
import {
    FETCH_COURSES,
} from '../actions/types';

// export default (state={}, action) => {
//     switch (action.type){
//         case CREATE_CATERGORY:
//             return { ...state, ..._.mapKeys(action.payload,'id')};
//         case FETCH_CATEGORIES:
//             return { ...state, [action.payload.id]: action.payload };
//         case CREATE_STREAM:
//             return { ...state, [action.payload.id]: action.payload };
//         case EDIT_STREAM:
//             return { ...state, [action.payload.id]: action.payload };
//         case DELETE_STREAM:
//             return _.omit(state, action.payload);
//         default:
//             return state;
//     }
// }

export default (state={}, action) => {
    switch (action.type){
        case FETCH_COURSES:
            return { ...state, ..._.mapKeys(action.payload,'id')};
        default:
            return state;
    }
}