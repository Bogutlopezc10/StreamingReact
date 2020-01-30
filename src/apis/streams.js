import axios from 'axios';
import { CAMILO } from '../actions/types';

export default axios.create({
    baseURL: CAMILO
});