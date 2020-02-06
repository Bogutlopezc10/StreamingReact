import _ from 'lodash';
import {initialState} from './initialState' 
import {
    FETCH_COURSES,
    FETCH_COURSE,
    FETCH_COURSE_BY_CATEGORY,
    FETCH_COURSES_BY_USERNAME,
    CREATE_COURSE,
    EDIT_COURSE,
    DELETE_COURSE,
    UPDATE_SUCCESS_UNMOUNT
} from '../actions/types';


export default (state= initialState(), action) => {
    switch (action.type){
        case FETCH_COURSES:
            return {
                 ...state, 
                 data:{...state.data,..._.mapKeys(action.payload,'id')}
            };
        case FETCH_COURSE:
            return {
                ...state,
                data:{...state.data, [action.payload.id]:action.payload}
            }
        case EDIT_COURSE:
            return {
                ...state,
                data:{...state.data, [action.payload.id]:action.payload},
                isSuccess:true,
                messageSuccess:"El curso fue editado existosamente"
            }
        case CREATE_COURSE:
            return {
                ...state,
                data:{...state.data, [action.payload.id]:action.payload},
                isSuccess:true,
                messageSuccess:"El curso fue creado existosamente"
            }
        case FETCH_COURSE_BY_CATEGORY:
            return {
                ...state, 
                data:{...state.data,..._.mapKeys(action.payload,'id')}
            };
        case FETCH_COURSES_BY_USERNAME:
            return {
                ...state, 
                data:{...state.data,..._.mapKeys(action.payload,'id')}
            };
        case DELETE_COURSE:
             return {
                ...state,
                data: _.omit(state.data, action.payload),
                 isSuccess:true,
                messageSuccess:"El curso fue eliminado existosamente"
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