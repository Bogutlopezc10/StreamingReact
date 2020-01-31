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

