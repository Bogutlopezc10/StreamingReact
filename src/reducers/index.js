import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import categoryReducer from './categoryReducer';
import courseReducer from './courseReducer';

export default combineReducers({
    categories: categoryReducer,
    courses: courseReducer
});