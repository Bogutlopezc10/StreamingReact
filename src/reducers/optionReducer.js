import { 
    FETCH_OPTIONS_BY_QUESTION_ID,
    CREATE_OPTIONS,
    EDIT_OPTIONS,
    SUCCESS_UNMOUNT_OPTIONS,
    DELETE_OPTIONS,
    FETCH_OPTIONS_EXAMS_BY_COURSE_ID,
    FETCH_OPTIONS
 } from '../actions/types'; 
import _ from 'lodash';

const defaultState = {
    data:{},
    isSuccess:false,
    messageSuccess:null,
    isCreating:false,
    isEditing:false,
    currentQuestion:null,
    isLoading:true
}

export default (state = defaultState, action) => {
    switch(action.type){
        case FETCH_OPTIONS:
            return { ...state, data:{...state.data, ..._.mapKeys(action.payload,'id')}};
        case FETCH_OPTIONS_EXAMS_BY_COURSE_ID:
            return { ...state, data:{...state.data, ..._.mapKeys(action.payload,'id')}};
        case FETCH_OPTIONS_BY_QUESTION_ID:
            return { 
                ...state, data:{...state.data, ..._.mapKeys(action.payload,'id')},
            };
        case CREATE_OPTIONS:
            return{
                ...state,
                isSuccess:true,
                messageSuccess:"las opciones  fueron creadas exitosamente.",
                isCreating:false
            }
        case EDIT_OPTIONS:
            return{
                ...state,
                isSuccess:true,
                messageSuccess:"las opciones  fueron editadas exitosamente.",
                isCreating:false
            }
        case DELETE_OPTIONS:
            return{
                ...state,
                data: _.omit(state.data, action.payload),
                isSuccess:true,
                messageSuccess:"las opciones  fueron eliminadas exitosamente.",
                isCreating:false
            }
        case SUCCESS_UNMOUNT_OPTIONS:
            return{
                ...state,
                isSuccess:false,
                messageSuccess:null,
                isCreating:false
            }
        default:
            return state;
    }
}