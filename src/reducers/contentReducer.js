import { 
    FETCH_CONTENTS,
    IS_CREATING_CONTENT,
    IS_NOT_CREATING_CONTENT,
    CREATE_CONTENT,
    EDIT_CONTENT,
    IS_EDITING_CONTENT,
    IS_NOT_EDITING_CONTENT
} from '../actions/types';
import _ from 'lodash';

const defaultState = {
    data:{},
    isSuccess:false,
    messageSuccess:null,
    isCreating:false,
    isEditing:false,
    currentContent:null
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
        default:
            return state;
    }
}