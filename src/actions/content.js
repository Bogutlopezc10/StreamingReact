import streams from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { 
    FETCH_CONTENTS, 
    UPDATE_ERROR_WITH_ACTION,
    IS_CREATING_CONTENT,
    IS_NOT_CREATING_CONTENT,
    CREATE_CONTENT
} from '../actions/types';

export const fetchContents = (id) => async dispatch => {
    try{
        const response = await streams.get(`/Contents/BySubject/${id}`);
        dispatch({ type: FETCH_CONTENTS, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}

export const createContent = (formValues, subjectId) => async dispatch => {
    try{
        const response = await streams.post('/Contents',{...formValues, subjectId});
        dispatch({ type: CREATE_CONTENT, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}

export const isCreatingContent = () => async dispatch => {
        
    dispatch({ type: IS_CREATING_CONTENT, payload: true })

}

export const isNotCreatingContent = () => async dispatch => {
        
    dispatch({ type: IS_NOT_CREATING_CONTENT, payload: false })

}