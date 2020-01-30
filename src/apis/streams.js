import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:51066/api'
});