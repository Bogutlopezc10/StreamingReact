import streams from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { 
    FETCH_COURSES,
    FETCH_COURSE_BY_CATEGORY,
    FETCH_COURSE,
    FETCH_COURSES_BY_USERNAME,
    CREATE_COURSE,
    EDIT_COURSE,
    CURRENT_USER,
    DELETE_COURSE,
    UPDATE_ERROR_WITH_ACTION,
    POST_COURSE,
    COURSE_CAN_BE_POSTED
} from './types';

export const fetchCourses = () => async dispatch => {
    try{
        const response = await streams.get('/Courses');
        dispatch({ type: FETCH_COURSES, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }

}

export const fetchCoursesBycategory = (id) => async dispatch => {

    try{
        const response = await streams.get(`/Courses/ByCategory/${id}`);
        dispatch({ type: FETCH_COURSE_BY_CATEGORY, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}


export const fetchCourse = (id) => async dispatch => {

    try {
        const response = await streams.get(`/Courses/${id}`);
        dispatch({ type: FETCH_COURSE, payload: response.data });
    } catch (error) {
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}



export const fetchCourseByUsername = (username) => async dispatch => {

    try{
        const response = await streams.get(`/Courses/ByUsername/${username}`);
        dispatch({ type: FETCH_COURSES_BY_USERNAME, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}


export const createCourse = formValues =>async (dispatch) =>{

    const username = CURRENT_USER
    try{
        const response = await streams.post('/Courses',{...formValues, username})
        dispatch({type: CREATE_COURSE, payload:response.data})
        history.push('/teacher');
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }

};

export const editCourse = (id, formValues) =>async (dispatch) =>{

    try{
        const response = await streams.put(`/Courses/${id}`,formValues)
        dispatch({type: EDIT_COURSE, payload:response.data})
        history.push('/teacher');
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
};

export const CourseCanBePosted = (id) =>async (dispatch) =>{

    try{
        const response = await streams.get(`/Courses/CourseCanBePosted/${id}`)

        dispatch({type: COURSE_CAN_BE_POSTED, payload:response})
        //history.push('/teacher');
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
};

export const deleteCourse = (id) =>async dispatch =>{

    try{
        await streams.delete(`/Courses/${id}`);
        dispatch({type: DELETE_COURSE, payload:id})
        history.push('/teacher');
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
};


export const postCourse = (id) =>async (dispatch) =>{

    try{
        const response = await streams.put(`/Courses/PostCourse/${id}`)
        dispatch({type: POST_COURSE, payload:response.data})
        history.push('/teacher');
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
};