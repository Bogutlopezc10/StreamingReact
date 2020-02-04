import streams from '../apis/streams';
import history from '../history'
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
} from './types';

const createError = (error) => {

    if (!error.response){
        return(
            {
                isError: true,
                statusText: "Hubo un error en el servidor",
                data: "Bad Request",
                code: 400
            }
        )
    }
    else if (error.response.statusText != "Bad Request") {
        return(
            {
                isError: true,
                statusText: error.response.statusText,
                data: error.response.data,
                code: error.response.status
            }
        )
    }
    else if (error.response){
        return (
            {
                isError: true,
                statusText: "Request failed with status code 400",
                data: "Bad Request",
                code: 400
            }
        )
    }

    return(
        {
            isError: true,
            statusText: "Request failed with status code 400 servidor caido",
            data: "Bad Request",
            code: 400
        }
    )
}

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
