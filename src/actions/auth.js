import jwt_decode from 'jwt-decode';
import {
  SAVE_TOKEN,
  CLEAR_TOKEN
} from './types';

export const saveToken = (token) => ({
  type:  SAVE_TOKEN,
  payload: {
    decodedToken : jwt_decode(token),
    token,
  }
});

export const clearToken = () => ({
  type:  CLEAR_TOKEN,
});
