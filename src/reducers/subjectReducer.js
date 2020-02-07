import { 
    FETCH_SUBJECTS,
    IS_NOT_CREATING_SUBJECT,
    IS_CREATING_SUBJECT,
    CREATE_SUBJECT,
    IS_EDITING_SUBJECT,
    FETCH_SUBJECT
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
                messageSuccess:"El tema fue creado existosamente",
                isCreating:false
            }
        case FETCH_SUBJECT:
            return {
                ...state,
                data:{...state.data, [action.payload.id]:action.payload}
            }
        case IS_CREATING_SUBJECT:
            return { ...state, isCreating: action.payload}
        case IS_EDITING_SUBJECT:
            return { ...state, isCreating: action.payload}
        case IS_NOT_CREATING_SUBJECT:
            return { ...state, isCreating: action.payload}
        default:
            return state;
    }
}