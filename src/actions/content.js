import streams from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { FETCH_CONTENTS, UPDATE_ERROR_WITH_ACTION,FETCH_CONTENT } from '../actions/types';

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


export const fetchContent = (id) => async dispatch => {
    try{
        const response = await streams.get(`/Contents/${id}`);
        dispatch({ type: FETCH_CONTENT, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}