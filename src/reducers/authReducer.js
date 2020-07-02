import {
  SAVE_TOKEN,
  CLEAR_TOKEN,
  SAVE_STREAM_URL,
  FETCH_STREAM_URL
} from '../actions/types';

export const initialState = {
  token: undefined,
  decodedToken: undefined,
  currentUser: undefined,
  streamUrl: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        decodedToken: action.payload.decodedToken,
        currentUser: action.payload.user
      };
    case CLEAR_TOKEN:
      return {
        ...state,
        token: undefined,
        decodedToken: undefined,
        currentUser: undefined
      }
    case SAVE_STREAM_URL:
      return {
        ...state,
        streamUrl: action.payload
      }
    case FETCH_STREAM_URL:
      return {
        ...state,
        streamUrl: action.payload
      }
    default:
      return state;
  }
}
