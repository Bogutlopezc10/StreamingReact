import streams from '../apis/streams';
import history from '../history'
import { 
    FETCH_COURSES,
    FETCH_COURSE_BY_CATEGORY,
    FETCH_COURSE,
    FETCH_COURSES_BY_USERNAME,
    CREATE_COURSE
} from './types';

// export const createStream = (formValues) => async (dispatch, getState) => {
//     const { userId } = getState().auth;
//     const response = await streams.post('/streams', { ...formValues, userId });

//     dispatch({ type: CREATE_STREAM, payload: response.data });
//     history.push('/');
// };

export const fetchCourses = () => async dispatch => {
    const response = await streams.get('/Courses');

    dispatch({ type: FETCH_COURSES, payload: response.data });
}

export const fetchCoursesBycategory = (id) => async dispatch => {

    const response = await streams.get(`/Courses/ByCategory/${id}`);

    dispatch({ type: FETCH_COURSE_BY_CATEGORY, payload: response.data });
}


export const fetchCourse = (id) => async dispatch => {

    const response = await streams.get(`/Courses/${id}`);

    dispatch({ type: FETCH_COURSE, payload: response.data });
}



export const fetchCourseByUsername = (username) => async dispatch => {

    const response = await streams.get(`/Courses/ByUsername/${username}`);

    dispatch({ type: FETCH_COURSES_BY_USERNAME, payload: response.data });
}


export const createCourse = formValues =>async (dispatch) =>{

    const username = "Mr. Sample"
    const response = await streams.post('/Courses',{...formValues, username})

    dispatch({type: CREATE_COURSE, payload:response.data})

    //activate programmatic navigation
    history.push('/teacher');
};