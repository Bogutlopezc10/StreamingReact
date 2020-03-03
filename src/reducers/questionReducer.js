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
    DELETE_QUESTION,
    FETCH_QUESTIONS_EXAM,
    UNMOUNT_QUESTION_EXAM,
    NEXT_QUESTION_EXAM,
    UNMOUNT_QUESTIONS_LOADING
 } from '../actions/types'; 
import _ from 'lodash';

const defaultState = {
    data:{},
    isSuccess:false,
    messageSuccess:null,
    isCreating:false,
    isEditing:false,
    currentQuestion:null,
    questionsExam:[],
    currentQuestionExam:null,
    currentNumberQuestion:0,
    isLoading:true
}

export default (state = defaultState, action) => {
    switch(action.type){
        case FETCH_QUESTIONS_BY_COURSE_ID:
            return { 
                ...state, data:{...state.data, ..._.mapKeys(action.payload,'id')},
                isLoading:false
            };
        case FETCH_QUESTIONS_EXAM:
            return { ...state,
                questionsExam: action.payload,
                currentQuestionExam: action.payload[0],
                currentNumberQuestion: 1
            };
        case NEXT_QUESTION_EXAM:
            return { ...state,
                currentNumberQuestion: state.currentNumberQuestion + 1,
                currentQuestionExam: state.questionsExam[state.currentNumberQuestion]
            };
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
        case UNMOUNT_QUESTION_EXAM:
            return { ...state, 
                questionsExam:[],
                currentQuestionExam:null,
                currentNumberQuestion:0
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
        case UNMOUNT_QUESTIONS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}