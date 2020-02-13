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

