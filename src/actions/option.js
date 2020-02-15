import streams from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { 
    FETCH_OPTIONS_BY_QUESTION_ID,
    UPDATE_ERROR_WITH_ACTION,
    CREATE_OPTIONS
} from './types';

export const fetchOptionsByQuestionId = (id) => async dispatch => {

    try{
        const response = await streams.get(`/Options/ByQuestion/${id}`);
        dispatch({ type: FETCH_OPTIONS_BY_QUESTION_ID, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}

export const createOptions = (options, courseName, courseId) => async dispatch => {

    try{
        const response = await streams.post(`/Options`,options);
        dispatch({ type: CREATE_OPTIONS, payload: response.data });
        history.push(`/questions/${courseName}/${courseId}`);
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}