import { CURRENT_USER } from '../actions/types'

// Course Selector
export const getCourseByCategory = (state, category) => {

  const courses = Object.values(state.courses);

  return courses.filter((course) => {
    return course.categoryId == category.categoryId
  });
}

export const getById = (state, Id) => {
  return state[Id];
}


export const getCoursesPublished = (state) => {

  const courses = Object.values(state.courses);

  return courses.filter((course) => {
    return course.isPublished == true
  });
}


export const getCoursesPublishedByUser = (state) => {

  const courses = Object.values(state.courses);

  return courses.filter((course) => {
    return course.isPublished == true && course.username == CURRENT_USER
  });
}

export const getCoursesNotPublishedByUser = (state) => {

  const courses = Object.values(state.courses);

  return courses.filter((course) => {
    return course.isPublished == false && course.username == CURRENT_USER
  });
}

