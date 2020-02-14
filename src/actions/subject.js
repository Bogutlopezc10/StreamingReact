import streams from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { 
    FETCH_SUBJECTS, 
    UPDATE_ERROR_WITH_ACTION,
    IS_CREATING_SUBJECT,
    IS_NOT_CREATING_SUBJECT,
    CREATE_SUBJECT,
    EDIT_SUBJECT,
    IS_EDITING_SUBJECT,
    IS_NOT_EDITING_SUBJECT,
    FETCH_SUBJECT,
    DELETE_SUBJECT,
    UNMOUNT_CREATE_SUBJECT_FORM
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

export const fecthEditingSubject = (id) => async dispatch => {
    try{
        const response = await streams.get(`/Subjects/${id}`);
        dispatch({ type: IS_EDITING_SUBJECT, payload: response.data });
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

export const editSubject = (id, formValues) =>async (dispatch) =>{

    try{
        const response = await streams.put(`/Subjects/${id}`,formValues)
        dispatch({type: EDIT_SUBJECT, payload:response.data})
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
};

export const isNotEditingSubject = () => async dispatch =>{

    dispatch({ type: IS_NOT_EDITING_SUBJECT, payload: false })

}

export const isCreatingSubject = () => async dispatch => {
        
    dispatch({ type: IS_CREATING_SUBJECT, payload: true })

}

export const isNotCreatingSubject = () => async dispatch => {
        
    dispatch({ type: IS_NOT_CREATING_SUBJECT, payload: false })

}

export const unMountCreateForm = () => async dispatch => {
    dispatch({ type: UNMOUNT_CREATE_SUBJECT_FORM, payload: false })
}

export const fetchSubject = (id) => async dispatch => {

    try {
        const response = await streams.get(`/Subjects/${id}`);
        dispatch({ type: FETCH_SUBJECT, payload: response.data });
    } catch (error) {
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}

export const deleteSubject = (id, courseName, courseId) =>async dispatch =>{

    try{
        await streams.delete(`/Subjects/${id}`);
        dispatch({type: DELETE_SUBJECT, payload:id})
        history.push(`/Courses/Content/${courseName}/${courseId}`);
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
};
