import getAxios from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { 
    FETCH_USER_CONTENTS_BY_USERNAME,
    CURRENT_USER,
    UPDATE_ERROR_WITH_ACTION
} from './types';

export const fetchUserContentByUserName = () => async dispatch => {

    const username = CURRENT_USER
    try{
        const streams = getAxios();
        const response = await streams.get(`/UserContents/ByUsername/${username}`);
        dispatch({ type: FETCH_USER_CONTENTS_BY_USERNAME, payload: response.data });
    }
    catch(error){
        if(error.response && error.response.status == 401){
            history.push('/login');
        }
        else{
            dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
            history.push('/errors');
        }
    }
}


