import streams from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { 
    FETCH_CATEGORIES,
    FETCH_CATEGORY,
    CREATE_CATEGORY,
    EDIT_CATEGORY,
    DELETE_CATEGORY,
    UPDATE_ERROR_WITH_ACTION
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

export const createCategory = formValues => async (dispatch) =>{

    try{
        const response = await streams.post('/Categories', formValues)
        dispatch({type: CREATE_CATEGORY, payload:response.data})
        history.push('/categories');
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }

};

export const editCategory = (id, formValues) =>async (dispatch) =>{

    try{
        const response = await streams.put(`/Categories/${id}`,formValues)
        dispatch({type: EDIT_CATEGORY, payload:response.data})
        history.push('/categories');
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
};

export const deleteCategory = (id) =>async dispatch =>{

    try{
        await streams.delete(`/Categories/${id}`);
        dispatch({type: DELETE_CATEGORY, payload:id})
        history.push('/categories');
    }
    catch(error){
        dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
        history.push('/errors');
    }
};
