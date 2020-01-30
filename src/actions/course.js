import streams from '../apis/streams';
import { 
    FETCH_COURSES
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