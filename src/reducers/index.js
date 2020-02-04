import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import courseReducer from './courseReducer';
import {reducer as formReducer} from 'redux-form'
import errorReducer from './errorReducer';

export default combineReducers({
    categories: categoryReducer,
    form: formReducer,
    courses: courseReducer,
    error: errorReducer
});