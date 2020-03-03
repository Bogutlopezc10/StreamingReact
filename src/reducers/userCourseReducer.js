import _ from 'lodash';
import {
    FETCH_USERCOURSES_BY_USERNAME,
    CREATE_USERCOURSE_BY_USERNAME,
    FETCH_USERCOURSE,
    CURRENT_CONTENT_PLAYER,
    UPDATE_RATING_USERCOURSE,
    UPDATE_USER_COURSE_CORRECTANSWERS,
    UNMOUNT_DETAIL_COURSE,
    UNMOUNT_LOADING_USERCOURSE
} from '../actions/types';


const defaultState = {
    data:{},
    isSuccess:false,
    messageSuccess:null,
    isError:false,
    messageError:null,
    isLoading:true
}

export default (state= defaultState, action) => {
    switch (action.type){
        case FETCH_USERCOURSES_BY_USERNAME:
            return {
                 ...state, 
                 data:{...state.data,..._.mapKeys(action.payload,'id')},
                 isLoading: false
            };
        case CREATE_USERCOURSE_BY_USERNAME:
            return {
                ...state,
                data:{...state.data, [action.payload.id]:action.payload},
            }
        case UPDATE_USER_COURSE_CORRECTANSWERS:
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
        case UNMOUNT_DETAIL_COURSE:
            return {
                ...state,
                isLoading: true,
            };
        case UNMOUNT_LOADING_USERCOURSE:
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
}
