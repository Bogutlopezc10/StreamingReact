import streams from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { 
    FETCH_SUBJECTS, 
    UPDATE_ERROR_WITH_ACTION,
    IS_CREATING_SUBJECT,
    IS_NOT_CREATING_SUBJECT,
    CREATE_SUBJECT
} from '../actions/types';

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

export const createSubject = (formValues, courseId) => async dispatch => {
    try{
        const response = await streams.post('/Subjects',{...formValues, courseId});
        dispatch({ type: CREATE_SUBJECT, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}

export const isCreatingSubject = () => async dispatch => {
        
    dispatch({ type: IS_CREATING_SUBJECT, payload: true })

}

export const isNotCreatingSubject = () => async dispatch => {
        
    dispatch({ type: IS_NOT_CREATING_SUBJECT, payload: false })

}
