import getAxios from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { 
    FETCH_USERCOURSES_BY_USERNAME,
    UPDATE_ERROR_WITH_ACTION,
    CURRENT_USER,
    CREATE_USERCOURSE_BY_USERNAME,
    FETCH_USERCOURSE,
    UPDATE_RATING_USERCOURSE,
    UNMOUNT_LOADING_USERCOURSE
} from './types';

export const fetchUserCoursesByUserName = () => async dispatch => {
    const username = CURRENT_USER
    try{
        const streams = getAxios();
        const response = await streams.get(`/UsersCourses/ByUsername/${username}`);
        dispatch({ type: FETCH_USERCOURSES_BY_USERNAME, payload: response.data });
    }
    catch(error){
        if(error.response && error.response.status == 401){
            history.push('/login');
        }
        else{
            dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
            history.push('/errors');
        }
    }

}

export const updateRatingUserCourse = (id,rating) => async dispatch => {
    try{
        const streams = getAxios();
        const response = await streams.put(`/UsersCourses/${id}`,rating);
        dispatch({ type: UPDATE_RATING_USERCOURSE, payload: response.data });
    }
    catch(error){
        if(error.response && error.response.status == 401){
            history.push('/login');
        }
        else{
            dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
            history.push('/errors');
        }
    }
}


export const createUserCourse = courseIdV =>async (dispatch) =>{

    const usernameV = CURRENT_USER

    const userCourseValues={
        username: usernameV,
        courseId: courseIdV
    }
    try{
        const streams = getAxios();
        const response = await streams.post('/UsersCourses',userCourseValues)
        dispatch({type: CREATE_USERCOURSE_BY_USERNAME, payload:response.data})
        history.push('/userCourses');
    }
    catch(error){
        if(error.response && error.response.status == 401){
            history.push('/login');
        }
        else{
            dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
            history.push('/errors');
        }
    }

};

export const fetchUserCourse = (id) => async dispatch => {

    try{
        const streams = getAxios();
        const response = await streams.get(`/UsersCourses/${id}`);
        dispatch({ type: FETCH_USERCOURSE, payload: response.data });
    }
    catch(error){
        if(error.response && error.response.status == 401){
            history.push('/login');
        }
        else{
            dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
            history.push('/errors');
        }
    }

}

export const unMountLoadingUserCourse= () => dispatch => {
        
    dispatch({ type: UNMOUNT_LOADING_USERCOURSE })

}

