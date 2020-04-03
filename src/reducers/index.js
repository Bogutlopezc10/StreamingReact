import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import courseReducer from './courseReducer';
import { reducer as formReducer } from 'redux-form'
import errorReducer from './errorReducer';
import subjectReducer from './subjectReducer';
import contentReducer from './contentReducer';
import questionReducer from './questionReducer';
import optionReducer from './optionReducer';
import userCourseReducer from './userCourseReducer';
import userContentReducer from './userContentReducer';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  categories: categoryReducer,
  form: formReducer,
  courses: courseReducer,
  contents: contentReducer,
  subjects: subjectReducer,
  error: errorReducer,
  questions: questionReducer,
  options: optionReducer,
  userCourses: userCourseReducer,
  userContents: userContentReducer
});
