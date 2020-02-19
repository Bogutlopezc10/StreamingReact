import _ from 'lodash';
import {
    FETCH_USERCOURSES_BY_USERNAME,
    CREATE_USERCOURSE_BY_USERNAME,
    MOUNT_ERROR_USER_COURSE,
    UNMOUNT_ERROR_USER_COURSE
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
                isSuccess:true,
                messageSuccess:"El curso fue creado exitosamente."
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
