import { 
    FETCH_OPTIONS_BY_QUESTION_ID, CREATE_OPTIONS
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
        case FETCH_OPTIONS_BY_QUESTION_ID:
            return { ...state, data:{...state.data, ..._.mapKeys(action.payload,'id')}};
        case CREATE_OPTIONS:
            return{
                ...state,
                data:{...state.data, ..._.mapKeys(action.payload,'id')},
                isSuccess:true,
                messageSuccess:"las opciones  fueron creadas exitosamente.",
                isCreating:false
            }
        default:
            return state;
    }
}