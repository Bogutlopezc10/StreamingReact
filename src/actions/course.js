import getAxios from '../apis/streams';
import history from '../history'
import { createError } from './error';
import {GetEmailCurrentUser} from '../selectors/authSelectors'
import {store} from '../index'
import {
  FETCH_COURSES,
  FETCH_COURSE_BY_CATEGORY,
  FETCH_COURSE,
  FETCH_COURSES_BY_USERNAME,
  CREATE_COURSE,
  EDIT_COURSE,
  DELETE_COURSE,
  UPDATE_ERROR_WITH_ACTION,
  POST_COURSE,
  COURSE_CAN_BE_POSTED,
  UNMOUNT_COURSE_CONTENT,
  UNMOUNT_LOADING_COURSE,
  UNMOUNT_DETAIL_COURSE,
  CREATING_COURSE,
  EDITING_COURSE,
  UPDATE_IS_STREAMING_COURSE,
} from './types';

export const fetchCourses = () => async dispatch => {
  try {
    const streams = getAxios();
    const response = await streams.get('/Courses');
    dispatch({ type: FETCH_COURSES, payload: response.data });
  } catch (error) {
    if(error.response && error.response.status === 401){
      history.push('/login');
    }
    else{
      dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
      history.push('/errors');
    }
  }

}

export const fetchCoursesBycategory = (id) => async dispatch => {
  try {
    const streams = getAxios();
    const response = await streams.get(`/Courses/ByCategory/${id}`);
    dispatch({ type: FETCH_COURSE_BY_CATEGORY, payload: response.data });
  }
  catch (error) {
    if(error.response && error.response.status === 401){
      history.push('/login');
    }
    else{
      dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
      history.push('/errors');
    }
  }
}


export const fetchCourse = (id) => async dispatch => {

  try {
    const streams = getAxios();
    const response = await streams.get(`/Courses/${id}`);
    dispatch({ type: FETCH_COURSE, payload: response.data });
  } catch (error) {
    if(error.response && error.response.status === 401){
      history.push('/login');
    }
    else{
      dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
      history.push('/errors');
    }
  }
}



export const fetchCourseByUsername = () => async dispatch => {

  try {
    const streams = getAxios();
    const state = store.getState();
    const username = GetEmailCurrentUser(state);
    const response = await streams.get(`/Courses/ByUsername/${username}`);
    dispatch({ type: FETCH_COURSES_BY_USERNAME, payload: response.data });
  }
  catch (error) {
    if(error.response && error.response.status === 401){
      history.push('/login');
    }
    else{
      dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
      history.push('/errors');
    }
  }
}


export const createCourse = (formValues, formData) => async (dispatch) => {

  const state = store.getState();
  const username = GetEmailCurrentUser(state);
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    };
    const streams = getAxios();
    const response = await streams.post(`Courses/SavePhoto`, formData, config)
    const responseCourse = await streams.post(`Courses`, { ...formValues, username, photo: response.data })

    dispatch({ type: CREATE_COURSE, payload: responseCourse.data })
    history.push('/teacher');
  }
  catch (error) {
    if(error.response && error.response.status === 401){
      history.push('/login');
    }
    else{
      dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
      history.push('/errors');
    }
  }

};

export const editCourse = (id, formValues, formData) => async (dispatch) => {

  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }
    const streams = getAxios();
    const response = await streams.post(`Courses/SavePhoto`, formData, config)
    const responseCourse = await streams.put(`/Courses/${id}`, { ...formValues, photo: response.data })

    dispatch({ type: EDIT_COURSE, payload: responseCourse.data })
    history.push('/teacher');
  }
  catch (error) {
    if(error.response && error.response.status === 401){
      history.push('/login');
    }
    else{
      dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
      history.push('/errors');
    }
  }
};

export const CourseCanBePosted = (id) => async (dispatch) => {

  try {
    const streams = getAxios();
    const response = await streams.get(`/Courses/CourseCanBePosted/${id}`)

    dispatch({ type: COURSE_CAN_BE_POSTED, payload: response })
    //history.push('/teacher');
  }
  catch (error) {
    if(error.response && error.response.status === 401){
      history.push('/login');
    }
    else{
      dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
      history.push('/errors');
    }
  }
};

export const deleteCourse = (id) => async dispatch => {

  try {
    const streams = getAxios();
    await streams.delete(`/Courses/${id}`);
    dispatch({ type: DELETE_COURSE, payload: id })
    history.push('/teacher');
  }
  catch (error) {
    if(error.response && error.response.status === 401){
      history.push('/login');
    }
    else{
      dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
      history.push('/errors');
    }
  }
};


export const postCourse = (id) => async (dispatch) => {

  try {
    const streams = getAxios();
    const response = await streams.put(`/Courses/PostCourse/${id}`)
    dispatch({ type: POST_COURSE, payload: response.data })
    history.push('/teacher');
  }
  catch (error) {
    if(error.response && error.response.status === 401){
      history.push('/login');
    }
    else {
      dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
      history.push('/errors');
    }
  }
};


export const updateIsStreamingCourse = (id, isStreaming) => async dispatch => {

  try {
    const streams = getAxios();
    const isStreamingCommand = {
      isStreaming: isStreaming
    }
    const response = await streams.put(`/Courses/Streaming/${id}`, isStreamingCommand);
    dispatch({ type: UPDATE_IS_STREAMING_COURSE, payload: response.data });

    if(!isStreaming){
      history.push('/teacher');
    }
  }
  catch (error) {
    if(error.response && error.response.status === 401){
      history.push('/login');
    }
    else{
      dispatch({ type: UPDATE_ERROR_WITH_ACTION, payload: createError(error) });
      history.push('/errors');
    }
  }
}

export const unMountCourseContent = () => async dispatch => {

  dispatch({ type: UNMOUNT_COURSE_CONTENT })

}

export const unMountLoadingCourse = () => dispatch => {

  dispatch({ type: UNMOUNT_LOADING_COURSE })

}

export const unMountDetailCourse = () => dispatch => {

  dispatch({ type: UNMOUNT_DETAIL_COURSE })

}

export const creatingCourse = () => dispatch => {

  dispatch({ type: CREATING_COURSE })

}

export const editingCourse = () => dispatch => {
  dispatch({ type: EDITING_COURSE })
}
