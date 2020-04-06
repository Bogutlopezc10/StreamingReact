import getAxios from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { 
    FETCH_OPTIONS_BY_QUESTION_ID,
    UPDATE_ERROR_WITH_ACTION,
    CREATE_OPTIONS,
    EDIT_OPTIONS,
    SUCCESS_UNMOUNT_OPTIONS,
    DELETE_OPTIONS,
    UPDATE_USER_COURSE_CORRECTANSWERS,
    FETCH_OPTIONS_EXAMS_BY_COURSE_ID,
    FETCH_OPTIONS
} from './types';

export const fetchOptionsByQuestionId = (id) => async dispatch => {

    try{
        const streams = getAxios();
        const response = await streams.get(`/Options/ByQuestion/${id}`);
        dispatch({ type: FETCH_OPTIONS_BY_QUESTION_ID, payload: response.data });
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

export const fetchOptions = () => async dispatch => {

    try{
        const streams = getAxios();
        const response = await streams.get(`/Options`);
        dispatch({ type: FETCH_OPTIONS, payload: response.data });
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

export const createOptions = (options, courseName, courseId) => async dispatch => {

    try{
        const streams = getAxios();
        const response = await streams.post(`/Options`,options);
        dispatch({ type: CREATE_OPTIONS, payload: response.data });
        history.push(`/questions/${courseName}/${courseId}`);
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

export const editOptions = (options, courseName, courseId) => async dispatch => {

    try{
        const streams = getAxios();
        await streams.put(`/Options`,options);
        dispatch({ type: EDIT_OPTIONS});
        history.push(`/questions/${courseName}/${courseId}`);
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

export const deleteOptions = (questionId, courseName, courseId) => async dispatch => {

    try{
        const streams = getAxios();
        const response = await streams.delete(`/Options/${questionId}`);
        dispatch({ type: DELETE_OPTIONS, payload: response.data});
        history.push(`/questions/${courseName}/${courseId}`);
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

export const unMountOptions = () => async dispatch => {
        
    dispatch({ type: SUCCESS_UNMOUNT_OPTIONS })

}

export const validateAnswersExam = (answersExam, courseId, userCourseId) => async dispatch => {

    try{
        const streams = getAxios();
        const response = await streams.put(`/Options/ValidateExam`,answersExam);
        dispatch({ type: UPDATE_USER_COURSE_CORRECTANSWERS, payload: response.data});
        history.push(`/ValidateAnswersPage/${courseId}/${userCourseId}`);
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

export const fetchOptionsExamByCourseId = (id) => async dispatch => {

    try{
        const streams = getAxios();
        const response = await streams.get(`/Options/ByCourse/${id}`);
        dispatch({ type: FETCH_OPTIONS_EXAMS_BY_COURSE_ID, payload: response.data });
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