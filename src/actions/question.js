import streams from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { 
    FETCH_QUESTIONS_BY_COURSE_ID,
    UPDATE_ERROR_WITH_ACTION
} from './types';


export const fetchQuestionsByCourseId = (id) => async dispatch => {

    try{
        const response = await streams.get(`/Questions/ByCourse/${id}`);
        dispatch({ type: FETCH_QUESTIONS_BY_COURSE_ID, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}