import axios from 'axios';
import { JUAN_URL } from '../actions/types';
import { store } from '../index';
import { GetToken } from '../selectors/authSelectors';

const getAxios = () => {
  const instance = axios.create({
    baseURL: JUAN_URL
  });

  // Add token if exists
  const state = store.getState();
  const token = GetToken(state);
  if (token) {
    instance.defaults.headers.common['Authorization'] = `bearer ${token}`;
  }

  return instance;
}

export default getAxios;
