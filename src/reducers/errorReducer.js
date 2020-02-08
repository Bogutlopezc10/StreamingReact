import {
    UPDATE_ERROR_UNMOUNT,
    UPDATE_ERROR_WITH_ACTION
} from '../actions/types';


const defaultState = {
    isError: false,
    data:null,
    code: null,
    statusText: null
}

export default (state = defaultState, action) => {
    switch (action.type){
        case UPDATE_ERROR_WITH_ACTION:
            return {
                ...state,
                isError: action.payload.isError,
                data: action.payload.data,
                code: action.payload.code,
                statusText: action.payload.statusText
            };
        case UPDATE_ERROR_UNMOUNT:
            return {
                ...state,
                isError: false,
                data: null,
                code: null,
                statusText: null
            };
        default:
            return state;
    }
}