import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import courseReducer from './courseReducer';
import {reducer as formReducer} from 'redux-form'
import errorReducer from './errorReducer';
import subjectReducer from './subjectReducer';
import contentReducer from './contentReducer';
import questionReducer from './questionReducer';
import userCourseReducer from './userCourseReducer';

export default combineReducers({
    categories: categoryReducer,
    form: formReducer,
    courses: courseReducer,
    contents: contentReducer,
    subjects: subjectReducer,
    error: errorReducer,
    questions: questionReducer,
    userCourses: userCourseReducer
});