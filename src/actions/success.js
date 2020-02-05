import { 
    UPDATE_SUCCESS_UNMOUNT
} from './types';


export const updateSuccessUnmount = () => async dispatch => {

    dispatch({ type: UPDATE_SUCCESS_UNMOUNT});

}