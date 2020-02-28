import streams from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { 
    FETCH_CONTENTS, 
    UPDATE_ERROR_WITH_ACTION,
    IS_CREATING_CONTENT,
    IS_NOT_CREATING_CONTENT,
    CREATE_CONTENT,
    EDIT_CONTENT,
    IS_EDITING_CONTENT,
    IS_NOT_EDITING_CONTENT,
    FETCH_CONTENT,
    DELETE_CONTENT,
    UNMOUNT_CONTENT,
    CURRENT_CONTENT_PLAYER,
    CURRENT_USER,
    UNMOUNT_CONTENT_PLAYER
} from '../actions/types';

export const fetchContents = () => async dispatch => {
    try{
        const response = await streams.get(`/Contents`);
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


export const editContent = (id, formValues) =>async (dispatch) =>{

    try{
        const response = await streams.put(`/Contents/${id}`,formValues)
        dispatch({type: EDIT_CONTENT, payload:response.data})
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
};

export const fecthEditingContent = (id) => async dispatch => {
    try{
        const response = await streams.get(`/Contents/${id}`);
        dispatch({ type: IS_EDITING_CONTENT, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}

export const isNotEditingContent = () => async dispatch =>{

    dispatch({ type: IS_NOT_EDITING_CONTENT, payload: false })

}

export const unMountContent = () => async dispatch =>{

    dispatch({ type: UNMOUNT_CONTENT })

}

export const isCreatingContent = () => async dispatch => {

    dispatch({ type: IS_CREATING_CONTENT, payload: true })

}

export const isNotCreatingContent = () => async dispatch => {
        
    dispatch({ type: IS_NOT_CREATING_CONTENT, payload: false })

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

export const deleteContent = (id, courseName, courseId) =>async dispatch =>{

    try{
        await streams.delete(`/Contents/${id}`);
        dispatch({type: DELETE_CONTENT, payload:id})
        history.push(`/Courses/Content/${courseName}/${courseId}`);
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
};

export const fetchContentCurrentPlayer = (id) => async dispatch => {

    const username = CURRENT_USER

    try{
        const response = await streams.get(`/Contents/GetReadContent/${username}/${id}`);

        dispatch({ type: CURRENT_CONTENT_PLAYER, payload: response.data});
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}

export const unMountCourseContent = () =>  dispatch => {
        
    dispatch({ type: UNMOUNT_CONTENT_PLAYER })

}
