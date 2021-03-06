import {
    FETCH_CONTENTS, 
    IS_CREATING_CONTENT,
    IS_NOT_CREATING_CONTENT,
    CREATE_CONTENT,
    EDIT_CONTENT,
    IS_EDITING_CONTENT,
    IS_NOT_EDITING_CONTENT,
    FETCH_CONTENT,
    DELETE_CONTENT,
    IS_EDITING_SUBJECT,
    UNMOUNT_COURSE_CONTENT,
    UNMOUNT_CONTENT,
    CURRENT_CONTENT_PLAYER,
    UNMOUNT_CONTENT_PLAYER,
    FETCH_LAST_CONTENT_DESCENDING
} from '../actions/types';
import _ from 'lodash';

const defaultState = {
    data:{},
    isSuccess:false,
    messageSuccess:null,
    isCreating:false,
    isEditing:false,
    currentContent:null,
    currentPlayerContent:null,
    firstTimePlayer: true,
    isLoading:true
}

export default (state = defaultState, action) => {
    switch(action.type){
        case FETCH_CONTENTS:
            return { ...state, data:{...state.data, ..._.mapKeys(action.payload,'id')}};
        case CREATE_CONTENT:
            return{
                ...state,
                data:{...state.data, [action.payload.id]:action.payload},
                isSuccess:true,
                messageSuccess:"El contenido fue creado exitosamente.",
                isCreating:false
            }
        case EDIT_CONTENT:
            return{
                ...state,
                data:{...state.data, [action.payload.id]:action.payload},
                isSuccess:true,
                messageSuccess:"El contenido fue editado exitosamente.",
                isCreating:false,
                isEditing:false,
                currentContent:null
            }
        case IS_CREATING_CONTENT:
            return { ...state, isCreating: action.payload}
        case IS_NOT_CREATING_CONTENT:
            return { ...state, isCreating: action.payload}
        case IS_EDITING_CONTENT:
            return { ...state, 
                isEditing: true,
                isCreating:false,
                currentContent: action.payload
            }
        case IS_NOT_EDITING_CONTENT:
            return { ...state, 
                isEditing: action.payload,
                isCreating:false,
                currentContent: null
            }

        case FETCH_CONTENT:
            return {
                ...state,
                data:{...state.data, [action.payload.id]:action.payload}
            }
        case DELETE_CONTENT:
            return {
            ...state,
            data: _.omit(state.data, action.payload),
            isSuccess:true,
            messageSuccess:"El contenido fue eliminado exitosamente."
            };
        case IS_EDITING_SUBJECT:
            return { ...state, 
                isSuccess:false,
                messageSuccess:null,
                isCreating:false,
                isEditing:false,
                currentContent:null
            }
        case UNMOUNT_CONTENT:
            return { ...state, 
                isSuccess:false,
                messageSuccess:null,
                isCreating:false,
                isEditing:false,
                currentContent:null
            }
        case UNMOUNT_COURSE_CONTENT:
            return { ...state, 
                isSuccess:false,
                messageSuccess:null,
                isCreating:false,
                isEditing:false,
                currentContent:null
            }
        case FETCH_LAST_CONTENT_DESCENDING:
            return{
                ...state,
                currentPlayerContent: action.payload
            }
        case CURRENT_CONTENT_PLAYER:
            return{
                ...state,
                currentPlayerContent: action.payload.contentPlayer,
                firstTimePlayer: false
            }
        case UNMOUNT_CONTENT_PLAYER:
            return{
                ...state,
                currentPlayerContent: null,
                firstTimePlayer: true
            }
        default:
            return state;
    }
}