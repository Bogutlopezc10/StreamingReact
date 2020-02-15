import streams from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { 
    FETCH_USERCOURSES_BY_USERNAME,
    UPDATE_ERROR_WITH_ACTION,
    CURRENT_USER
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

