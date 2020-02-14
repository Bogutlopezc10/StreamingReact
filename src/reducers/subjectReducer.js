import { 
    FETCH_SUBJECTS,
    IS_NOT_CREATING_SUBJECT,
    IS_CREATING_SUBJECT,
    CREATE_SUBJECT,
    EDIT_SUBJECT,
    IS_EDITING_SUBJECT,
    IS_NOT_EDITING_SUBJECT,
    FETCH_SUBJECT,
    DELETE_SUBJECT,
    UNMOUNT_CREATE_SUBJECT_FORM,
    UNMOUNT_COURSE_CONTENT
 } from '../actions/types'; 
import _ from 'lodash';

const defaultState = {
    data:{},
    isSuccess:false,
    messageSuccess:null,
    isCreating:false,
    isEditing:false,
    currentSubject:null
}

export default (state = defaultState, action) => {
    switch(action.type){
        case FETCH_SUBJECTS:
            return { ...state, data:{...state.data, ..._.mapKeys(action.payload,'id')}};
        case CREATE_SUBJECT:
            return{
                ...state,
                data:{...state.data, [action.payload.id]:action.payload},
                isSuccess:true,
                messageSuccess:"El tema fue creado exitosamente.",
                isCreating:false
            }
        case EDIT_SUBJECT:
            return{
                ...state,
                data:{...state.data, [action.payload.id]:action.payload},
                isSuccess:true,
                messageSuccess:"El tema fue editado exitosamente.",
                isCreating:false,
                isEditing:false,
                currentSubject:null
            }
        case FETCH_SUBJECT:
            return {
                ...state,
                data:{...state.data, [action.payload.id]:action.payload}
            }
        case IS_CREATING_SUBJECT:
            return { ...state, isCreating: action.payload}
        case IS_EDITING_SUBJECT:
            return { ...state, 
                isEditing: true,
                isCreating:false,
                currentSubject: action.payload
            }
        case IS_NOT_CREATING_SUBJECT:
            return { ...state, isCreating: action.payload}
        case IS_NOT_EDITING_SUBJECT:
            return { ...state, 
                isEditing: action.payload,
                isCreating:false,
                currentSubject: null
            }
        case DELETE_SUBJECT:
            return {
            ...state,
            data: _.omit(state.data, action.payload),
            isSuccess:true,
            messageSuccess:"El tema fue eliminado exitosamente."
            };
        case UNMOUNT_CREATE_SUBJECT_FORM: 
            return { ...state, 
                isCreating: action.payload
            }
        case UNMOUNT_COURSE_CONTENT:
            return { ...state, 
                isSuccess:false,
                messageSuccess:null,
                isCreating:false,
                isEditing:false,
                currentSubject:null
            }
        default:
            return state;
    }
}