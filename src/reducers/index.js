import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import courseReducer from './courseReducer';

export default combineReducers({
    categories: categoryReducer,
    courses: courseReducer
});