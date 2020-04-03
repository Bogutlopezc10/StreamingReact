import {
  SAVE_TOKEN,
  CLEAR_TOKEN
} from '../actions/types';

export const initialState = {
  token: undefined,
  decodedToken: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        decodedToken: action.payload.decodedToken,
      };
    case CLEAR_TOKEN:
      return {
        ...state,
        token: undefined,
        decodedToken: undefined,
      }
    default:
      return state;
  }
}
