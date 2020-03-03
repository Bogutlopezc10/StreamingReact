import _ from 'lodash';
import {initialState} from './initialState' 
import {
    FETCH_CATEGORIES,
    FETCH_CATEGORY,
    CREATE_CATEGORY,
    EDIT_CATEGORY,
    UPDATE_SUCCESS_UNMOUNT,
    UNMOUNT_CATEGORY
} from '../actions/types';


export default (state = initialState() , action) => {
    switch (action.type){
        case FETCH_CATEGORIES:
            return {
                ...state,
                isLoading: false,
                data:{...state.data,..._.mapKeys(action.payload,'id')}
           };
        case FETCH_CATEGORY:
            return {
                ...state,
                data:{...state.data, [action.payload.id]:action.payload}
            }
        case CREATE_CATEGORY:
            return {
                ...state,
                data:{...state.data, [action.payload.id]:action.payload},
                isSuccess:true,
                messageSuccess:"La categoría fue creada exitosamente."
            }
        case EDIT_CATEGORY:
            return {
                ...state,
                data:{...state.data, [action.payload.id]:action.payload},
                isSuccess:true,
                messageSuccess:"La categoría fue editada exitosamente."
            }
        case UPDATE_SUCCESS_UNMOUNT:
            return {
                ...state,
                isSuccess:false,
                messageSuccess:null
        };
        case UNMOUNT_CATEGORY:
            return {
                ...state,
                isLoading: true
        };
        default:
            return state;
    }
}