function getCourseByCategory(state, category) {

  const courses = Object.values(state.courses);
  
  return courses.filter((course) => {
    return course.categoryId == category.categoryId
  });
}


  export default getCourseByCategory;