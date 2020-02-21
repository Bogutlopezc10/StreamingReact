import streams from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { 
    FETCH_USER_CONTENTS_BY_USERNAME,
    FETCH_USER_CONTENT_BY_USERNAME_CONTENT_ID,
    CURRENT_USER,
    UPDATE_ERROR_WITH_ACTION
} from './types';

export const fetchUserContentByUserName = () => async dispatch => {

    const username = CURRENT_USER
    try{
        const response = await streams.get(`/UserContents/ByUsername/${username}`);
        dispatch({ type: FETCH_USER_CONTENTS_BY_USERNAME, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}

export const fetchUserContentByUserNameContent = () => async dispatch => {

    const username = CURRENT_USER
    const id = 29
    try{
        const response = await streams.get(`/UserContents/ByUsernameContent/${id}/${username}`);
        dispatch({ type: FETCH_USER_CONTENT_BY_USERNAME_CONTENT_ID, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}

