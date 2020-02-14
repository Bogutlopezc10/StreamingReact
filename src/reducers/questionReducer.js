import { 
    FETCH_QUESTIONS_BY_COURSE_ID,
    IS_CREATING_QUESTION, 
    IS_NOT_CREATING_QUESTION,
    CREATE_QUESTION,
    IS_EDITING_QUESTION,
    IS_NOT_EDITING_QUESTION,
    EDIT_QUESTION,
    UNMOUNT_QUESTION,
    UNMOUNT_CREATE_QUESTION_FORM,
    FETCH_QUESTION,
    DELETE_QUESTION
 } from '../actions/types'; 
import _ from 'lodash';

const defaultState = {
    data:{},
    isSuccess:false,
    messageSuccess:null,
    isCreating:false,
    isEditing:false,
    currentQuestion:null
}

export default (state = defaultState, action) => {
    switch(action.type){
        case FETCH_QUESTIONS_BY_COURSE_ID:
            return { ...state, data:{...state.data, ..._.mapKeys(action.payload,'id')}};
        case IS_CREATING_QUESTION:
            return { ...state, isCreating: action.payload}
        case IS_NOT_CREATING_QUESTION:
            return { ...state, isCreating: action.payload}
        case CREATE_QUESTION:
            return{
                ...state,
                data:{...state.data, [action.payload.id]:action.payload},
                isSuccess:true,
                messageSuccess:"la pregunta fue creada exitosamente.",
                isCreating:false
            }
        case IS_EDITING_QUESTION:
            return { ...state, 
                isEditing: true,
                isCreating:false,
                currentQuestion: action.payload
            }
        case IS_NOT_EDITING_QUESTION:
            return { ...state, 
                isEditing: action.payload,
                isCreating:false,
                currentQuestion: null
            }
        case EDIT_QUESTION:
            return{
                ...state,
                data:{...state.data, [action.payload.id]:action.payload},
                isSuccess:true,
                messageSuccess:"La pregunta fue editada exitosamente.",
                isCreating:false,
                isEditing:false,
                currentQuestion:null
            }
        case UNMOUNT_QUESTION:
            return { ...state, 
                isSuccess:false,
                messageSuccess:null,
                isCreating:false,
                isEditing:false,
                currentQuestion:null
            }
        case UNMOUNT_CREATE_QUESTION_FORM:
            return { ...state, 
                isCreating:false,
            }
        case FETCH_QUESTION:
            return {
                ...state,
                data:{...state.data, [action.payload.id]:action.payload}
            }
        case DELETE_QUESTION:
            return {
            ...state,
            data: _.omit(state.data, action.payload),
            isSuccess:true,
            messageSuccess:"la pregunta fue eliminada exitosamente."
            };
        default:
            return state;
    }
}