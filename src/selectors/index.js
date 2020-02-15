import { CURRENT_USER } from '../actions/types'

// Course Selector
export const getCourseByCategory = (state, category) => {

  const courses = Object.values(state.courses.data);

  return courses.filter((course) => {
    return course.categoryId == category.categoryId && course.isPublished == true
  });
}

export const getById = (state, Id) => {
  return state[Id];
}


export const getCoursesPublished = (state) => {

  const courses = Object.values(state.courses.data);
  return courses.filter((course) => {
    return course.isPublished == true
  });
}


export const getCoursesPublishedByUser = (state) => {

  const courses = Object.values(state.courses.data);

  return courses.filter((course) => {
    return course.isPublished == true && course.username == CURRENT_USER
  });
}

export const getCoursesNotPublishedByUser = (state) => {

  const courses = Object.values(state.courses.data);

  return courses.filter((course) => {
    return course.isPublished == false && course.username == CURRENT_USER
  });
}

// Subject Selector

export const getSubjectsByCourseId = (state, courseId) => {

  const subjects = Object.values(state.subjects.data);

  return subjects.filter((subject) => {
    return subject.courseId == courseId
  });
}

// Content Selector

export const getContentsBySubjectId = (state, subjectId) => {

  const contents = Object.values(state.contents.data);

  return contents.filter((content) => {
    return content.subjectId == subjectId
  });
}


//Question Selector

export const getQuestionsByCourseId = (state, courseId) => {

  const questions = Object.values(state.questions.data);

  return questions.filter((question) => {
    return question.courseId == courseId
  });
}

//Option selector

export const getOptionsByQuestionId = (state, questionId) => {

  const options = Object.values(state.options.data);

  return options.filter((option) => {
    return option.questionId == questionId
  });
}

// UserCourse Selector

export const getUserCoursesFinishedByUser = (state) => {

  const userCourses = Object.values(state.userCourses.data);

  return userCourses.filter((userCourse) => {
    return userCourse.isEnd == true && userCourse.username == CURRENT_USER
  });
}

export const getUserCoursesNotFinishedByUser = (state) => {

  const userCourses = Object.values(state.userCourses.data);

  return userCourses.filter((userCourse) => {
    return userCourse.isEnd == false && userCourse.username == CURRENT_USER
  });
}