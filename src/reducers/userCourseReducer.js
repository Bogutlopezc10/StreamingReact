import _ from 'lodash';
import {
    FETCH_USERCOURSES_BY_USERNAME,
    CREATE_USERCOURSE_BY_USERNAME,
    MOUNT_ERROR_USER_COURSE,
    UNMOUNT_ERROR_USER_COURSE,
    FETCH_USERCOURSE,
    CURRENT_CONTENT_PLAYER,
    UPDATE_RATING_USERCOURSE
} from '../actions/types';


const defaultState = {
    data:{},
    isSuccess:false,
    messageSuccess:null,
    isError:false,
    messageError:null
}

export default (state= defaultState, action) => {
    switch (action.type){
        case FETCH_USERCOURSES_BY_USERNAME:
            return {
                 ...state, 
                 data:{...state.data,..._.mapKeys(action.payload,'id')}
            };
        case CREATE_USERCOURSE_BY_USERNAME:
            return {
                ...state,
                data:{...state.data, [action.payload.id]:action.payload},
            }
        case CURRENT_CONTENT_PLAYER:
            return {
                ...state,
                data:{...state.data, [action.payload.userCoursePlayer.id]:action.payload.userCoursePlayer},
            }
        case UPDATE_RATING_USERCOURSE:
            return {
                ...state,
                data:{...state.data, [action.payload.id]:action.payload},
            }
        case FETCH_USERCOURSE:
            return {
                ...state,
                data:{...state.data, [action.payload.id]:action.payload},
            }
        case MOUNT_ERROR_USER_COURSE:
            return {
                ...state,
                isError: true,
                messageError: "Ya estas matriculado en este curso"
            }
        case UNMOUNT_ERROR_USER_COURSE:
            return {
                ...state,
                isError: false,
                messageError: null
            }
        default:
            return state;
    }
}
