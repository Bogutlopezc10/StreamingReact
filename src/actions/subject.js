import streams from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { FETCH_SUBJECTS, UPDATE_ERROR_WITH_ACTION } from '../actions/types';

export const fetchSubjects = (id) => async dispatch => {
    try{
        const response = await streams.get(`/Subjects/ByCourse/${id}`);
        dispatch({ type: FETCH_SUBJECTS, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}