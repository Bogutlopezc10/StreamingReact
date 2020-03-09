import streams from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { 
    FETCH_CATEGORIES,
    FETCH_CATEGORY,
    CREATE_CATEGORY,
    EDIT_CATEGORY,
    UPDATE_ERROR_WITH_ACTION,
    UNMOUNT_CATEGORY,
    CREATING_CATEGORY
} from './types';

export const fetchCategories = () => async dispatch => {
    const response = await streams.get('/Categories');

    dispatch({ type: FETCH_CATEGORIES, payload: response.data });
}

export const fetchCategory = (id) => async dispatch => {

    try {
        const response = await streams.get(`/Categories/${id}`);
        dispatch({ type: FETCH_CATEGORY, payload: response.data });
    } catch (error) {
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
}

export const createCategory = (formValues, formData) => async (dispatch) =>{

    try{
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        };
        const responsePhoto = await streams.post(`Categories/SavePhoto`,formData, config)

        const response = await streams.post('/Categories', {...formValues, photo: responsePhoto.data})
        dispatch({type: CREATE_CATEGORY, payload:response.data})
        history.push('/categories');
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }

};

export const editCategory = (id, formValues, formData) =>async (dispatch) =>{

    try{
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        };
        const responsePhoto = await streams.post(`Categories/SavePhoto`,formData, config)
        const response = await streams.put(`/Categories/${id}`,{...formValues, photo: responsePhoto.data})
        dispatch({type: EDIT_CATEGORY, payload:response.data})
        history.push('/categories');
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
};

export const unMountCategory = () => dispatch => {
        
    dispatch({ type: UNMOUNT_CATEGORY })

}

export const creatingCategory = () => dispatch => {
        
    dispatch({ type: CREATING_CATEGORY })

}