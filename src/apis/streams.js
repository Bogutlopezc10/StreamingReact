import axios from 'axios';
import { CAMILO, JUAN } from '../actions/types';

export default axios.create({
    baseURL: JUAN
});