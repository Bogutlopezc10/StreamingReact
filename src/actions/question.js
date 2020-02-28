import streams from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { 
    FETCH_QUESTIONS_BY_COURSE_ID,
    UPDATE_ERROR_WITH_ACTION,
    IS_CREATING_QUESTION,
    IS_NOT_CREATING_QUESTION,
    CREATE_QUESTION,
    IS_EDITING_QUESTION,
    IS_NOT_EDITING_QUESTION,
    EDIT_QUESTION,
    UNMOUNT_QUESTION,
    UNMOUNT_CREATE_QUESTION_FORM,
    FETCH_QUESTION,
    DELETE_QUESTION,
    FETCH_QUESTIONS_EXAM,
    UNMOUNT_QUESTION_EXAM,
    NEXT_QUESTION_EXAM
} from './types';


export const fetchQuestionsByCourseId = (id) => async dispatch => {

    try{
        const response = await streams.get(`/Questions/ByCourse/${id}`);
        dispatch({ type: FETCH_QUESTIONS_BY_COURSE_ID, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}

export const fetchQuestionsExamByCourseId = (id) => async dispatch => {

    try{
        const response = await streams.get(`/Questions/QuestionExam/${id}`);
        dispatch({ type: FETCH_QUESTIONS_EXAM, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}

export const isCreatingQuestion = () => async dispatch => {
        
    dispatch({ type: IS_CREATING_QUESTION, payload: true })

}

export const isNotCreatingQuestion = () => async dispatch => {
        
    dispatch({ type: IS_NOT_CREATING_QUESTION, payload: false })

}


export const createQuestion = (formValues, courseId) => async dispatch => {
    try{
        const response = await streams.post('/Questions',{...formValues, courseId});
        dispatch({ type: CREATE_QUESTION, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}


export const fecthEditingQuestion = (id) => async dispatch => {
    try{
        const response = await streams.get(`/Questions/${id}`);
        dispatch({ type: IS_EDITING_QUESTION, payload: response.data });
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}

export const isNotEditingQuestion = () => async dispatch =>{

    dispatch({ type: IS_NOT_EDITING_QUESTION, payload: false })

}


export const editQuestion = (id, formValues) =>async (dispatch) =>{

    try{
        const response = await streams.put(`/Questions/${id}`,formValues)
        dispatch({type: EDIT_QUESTION, payload:response.data})
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
};

export const unMountQuestion = () => async dispatch => {
        
    dispatch({ type: UNMOUNT_QUESTION })

}

export const unMountCreateQuestionForm = () => async dispatch => {
        
    dispatch({ type: UNMOUNT_CREATE_QUESTION_FORM })

}


export const fetchQuestion = (id) => async dispatch => {

    try {
        const response = await streams.get(`/Questions/${id}`);
        dispatch({ type: FETCH_QUESTION, payload: response.data });
    } catch (error) {
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}


export const deleteQuestion = (id, courseName, courseId) =>async dispatch =>{

    try{
        await streams.delete(`/Questions/${id}`);
        dispatch({type: DELETE_QUESTION, payload:id})
        history.push(`/questions/${courseName}/${courseId}`);
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
};

export const unMountQuestionExam = () => dispatch => {
        
    dispatch({ type: UNMOUNT_QUESTION_EXAM })

}

export const nextQuestionExam = () => dispatch => {
        
    dispatch({ type: NEXT_QUESTION_EXAM })

}