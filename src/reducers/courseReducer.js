import _ from 'lodash';
import {
    FETCH_COURSES,
    FETCH_COURSE,
    FETCH_COURSE_BY_CATEGORY,
    FETCH_COURSES_BY_USERNAME,
    CREATE_COURSE,
    EDIT_COURSE,
    DELETE_COURSE
} from '../actions/types';

export default (state={}, action) => {
    switch (action.type){
        case FETCH_COURSES:
            return { ...state, ..._.mapKeys(action.payload,'id')};
        case FETCH_COURSE:
            return {...state, [action.payload.id]: action.payload}
        case EDIT_COURSE:
            return {...state, [action.payload.id]: action.payload}
        case CREATE_COURSE:
                return {...state, [action.payload.id]: action.payload}
        case FETCH_COURSE_BY_CATEGORY:
            return { ...state, ..._.mapKeys(action.payload,'id')};
        case FETCH_COURSES_BY_USERNAME:
            return { ...state, ..._.mapKeys(action.payload,'id')};
        case DELETE_COURSE:
             return _.omit(state, action.payload);
        default:
            return state;
    }
}