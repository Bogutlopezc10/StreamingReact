import { 
    UPDATE_ERROR_UNMOUNT
} from './types';


export const updateErrorUnmount = () => async dispatch => {

    dispatch({ type: UPDATE_ERROR_UNMOUNT});

}