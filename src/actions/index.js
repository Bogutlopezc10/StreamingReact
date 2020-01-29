import streams from '../apis/streams';
import history from '../history';
import { 
    CREATE_CATERGORY,
    FETCH_CATEGORIES,
    FETCH_CATEGORY,
    DELETE_CATEGORY,
    EDIT_CATEGORY
} from './types';

// export const createStream = (formValues) => async (dispatch, getState) => {
//     const { userId } = getState().auth;
//     const response = await streams.post('/streams', { ...formValues, userId });

//     dispatch({ type: CREATE_STREAM, payload: response.data });
//     history.push('/');
// };

export const fetchCategories = () => async dispatch => {
    const response = await streams.get('/Categories');

    dispatch({ type: FETCH_CATEGORIES, payload: response.data });
}

// export const fetchStream = (id) => async dispatch => {
//     const response = await streams.get(`/streams/${id}`);

//     dispatch({ type: FETCH_STREAM, payload: response.data });
// }

// export const editStream = (id, formValues) => async dispatch => {
//     const response = await streams.patch(`/streams/${id}`, formValues);

//     dispatch({ type: EDIT_STREAM, payload: response.data });
//     history.push('/');
// }

// export const deleteStream = (id) => async dispatch => {    
//     await streams.delete(`/streams/${id}`);

//     dispatch({ type: DELETE_STREAM, payload: id });
//     history.push('/');
// }