import history from '../history'
import getAxios from '../apis/streams';
import { createError } from './error';
import { store } from '../index';
import {GetEmailCurrentUser} from '../selectors/authSelectors'
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
    FETCH_LAST_CONTENT_DESCENDING,
    UNMOUNT_CONTENT_PLAYER
} from '../actions/types';

export const fetchContentsByCourseId = (id) => async dispatch => {
    try{
        const streams = getAxios();
        const response = await streams.get(`/Contents/ByCourse/${id}`);
        dispatch({ type: FETCH_CONTENTS, payload: response.data });
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

export const createContent = (formValues, subjectId) => async dispatch => {
    try{
        const streams = getAxios();
        const response = await streams.post('/Contents',{...formValues, subjectId});
        dispatch({ type: CREATE_CONTENT, payload: response.data });
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


export const editContent = (id, formValues) =>async (dispatch) =>{

    try{
        const streams = getAxios();
        const response = await streams.put(`/Contents/${id}`,formValues)
        dispatch({type: EDIT_CONTENT, payload:response.data})
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
};

export const fecthEditingContent = (id) => async dispatch => {
    try{
        const streams = getAxios();
        const response = await streams.get(`/Contents/${id}`);
        dispatch({ type: IS_EDITING_CONTENT, payload: response.data });
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
        const streams = getAxios();
        const response = await streams.get(`/Contents/${id}`);
        dispatch({ type: FETCH_CONTENT, payload: response.data });
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

export const deleteContent = (id, courseName, courseId) =>async dispatch =>{

    try{
        const streams = getAxios();
        await streams.delete(`/Contents/${id}`);
        dispatch({type: DELETE_CONTENT, payload:id})
        history.push(`/Courses/Content/${courseName}/${courseId}`);
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
};

export const fetchContentCurrentPlayer = (id) => async dispatch => {

    const state = store.getState();
    const username = GetEmailCurrentUser(state);

    try{
        const streams = getAxios();
        const response = await streams.get(`/Contents/GetReadContent/${username}/${id}`);
        dispatch({ type: CURRENT_CONTENT_PLAYER, payload: response.data});
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

export const fetchLastContentByUserNameDescending = (courseId) => async dispatch => {

    const state = store.getState();
    const username = GetEmailCurrentUser(state);

    try{
        const streams = getAxios();
        const response = await streams.get(`/Contents/GetLastContentDescending/${courseId}/${username}`);
        dispatch({ type: FETCH_LAST_CONTENT_DESCENDING, payload: response.data });
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

export const unMountCourseContent = () =>  dispatch => {
        
    dispatch({ type: UNMOUNT_CONTENT_PLAYER })

}
