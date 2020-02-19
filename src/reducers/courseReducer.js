import _ from 'lodash';
import {
    FETCH_COURSES,
    FETCH_COURSE,
    FETCH_COURSE_BY_CATEGORY,
    FETCH_COURSES_BY_USERNAME,
    CREATE_COURSE,
    EDIT_COURSE,
    DELETE_COURSE,
    UPDATE_SUCCESS_UNMOUNT,
    POST_COURSE,
    COURSE_CAN_BE_POSTED,
    UNMOUNT_CAN_BE_POSTED
} from '../actions/types';


const defaultState = {
    data:{},
    isSuccess:false,
    messageSuccess:null,
    canBePosted: null,
}

export default (state= defaultState, action) => {
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
                messageSuccess:"El curso fue editado exitosamente."
            }
        case CREATE_COURSE:
            return {
                ...state,
                data:{...state.data, [action.payload.id]:action.payload},
                isSuccess:true,
                messageSuccess:"El curso fue creado exitosamente."
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
            messageSuccess:"El curso fue eliminado exitosamente."
            };
        case COURSE_CAN_BE_POSTED:
            if(action.payload.status == 204){
                return {
                    ...state,
                    canBePosted: false
                }
            }
            return {
                ...state,
                data:{...state.data, [action.payload.data.id]:action.payload.data},
                canBePosted: true
            };
        case UPDATE_SUCCESS_UNMOUNT:
            return {
                ...state,
                isSuccess:false,
                messageSuccess:null,
                canBePosted: null,
            };
        case UNMOUNT_CAN_BE_POSTED:
                return {
                    ...state,
                    canBePosted: null,
            };
        case POST_COURSE:
                return {
                    ...state,
                    data:{...state.data, [action.payload.id]:action.payload},
                    isSuccess:true,
                    messageSuccess:"El curso fue publicado exitosamente."
                }
        default:
            return state;
    }
}