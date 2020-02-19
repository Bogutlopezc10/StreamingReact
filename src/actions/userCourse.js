import streams from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { 
    FETCH_USERCOURSES_BY_USERNAME,
    UPDATE_ERROR_WITH_ACTION,
    CURRENT_USER,
    CREATE_USERCOURSE_BY_USERNAME,
    MOUNT_ERROR_USER_COURSE,
    UNMOUNT_ERROR_USER_COURSE,
} from './types';

export const fetchUserCoursesByUserName = () => async dispatch => {
    const username = CURRENT_USER
    try{
        const response = await streams.get(`/UsersCourses/ByUsername/${username}`);
        dispatch({ type: FETCH_USERCOURSES_BY_USERNAME, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }

}


export const createUserCourse = courseIdV =>async (dispatch) =>{

    const usernameV = CURRENT_USER

    const userCourseValues={
        username: usernameV,
        courseId: courseIdV
    }
    try{
        const response = await streams.post('/UsersCourses',userCourseValues)
        
        if(response.status == 204){
            dispatch({type: MOUNT_ERROR_USER_COURSE})
        }
        else{
            dispatch({type: CREATE_USERCOURSE_BY_USERNAME, payload:response.data})
            history.push('/userCourses');
        }
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }

};

export const unMountUserCourse = () => async dispatch => {
    dispatch({ type: UNMOUNT_ERROR_USER_COURSE })

}
