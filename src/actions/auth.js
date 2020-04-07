import jwt_decode from 'jwt-decode';
import getAxios from '../apis/streams';
import history from '../history'
import { createError } from './error';
import { store } from '../index';
import {GetCurrentUser} from '../selectors/authSelectors'
import {
  SAVE_TOKEN,
  CLEAR_TOKEN,
  UPDATE_ERROR_WITH_ACTION
} from './types';

export const saveToken = (token, user) => async dispatch => {
  
  dispatch(
    {
      type:  SAVE_TOKEN,
      payload:
      {
        decodedToken : jwt_decode(token),
        token,
        user
      }
    }
  )
  
  const state = store.getState();
  const currentUser = GetCurrentUser(state);

  try {
    const streams = getAxios();
    await streams.post(`/Users/`,currentUser);
  } catch (error) {
    if(error.response && error.response.status == 401){
        history.push('/login');
    }
    else{
      dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
      history.push('/errors');
  }
}
  
};

export const clearToken = () => ({
  type:  CLEAR_TOKEN,
});
