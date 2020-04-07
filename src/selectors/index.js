import {GetEmailCurrentUser} from '../selectors/authSelectors'

// OrderBy
const compareValuesCreatedAt = (key, order = 'asc') => {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}


const compareValuesPostedAt = (key, order = 'asc') => {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

// Course Selector
export const getCourseByCategory = (state, category) => {

  const courses = Object.values(state.courses.data);

  return courses.filter((course) => {
    return course.categoryId == category.categoryId && course.isPublished == true
  }).sort(compareValuesPostedAt('postedAt', 'desc'));
}

export const getById = (state, Id) => {
  return state[Id];
}


export const getCoursesPublished = (state) => {

  const courses = Object.values(state.courses.data);
  return courses.filter((course) => {
    return course.isPublished == true
  }).sort(compareValuesPostedAt('postedAt', 'desc'));
}


export const getCoursesPublishedByUser = (state) => {

  const courses = Object.values(state.courses.data);

  return courses.filter((course) => {
    return course.isPublished == true && course.username == GetEmailCurrentUser(state)
  }).sort(compareValuesPostedAt('postedAt', 'desc'));;
}

export const getCoursesNotPublishedByUser = (state) => {

  const courses = Object.values(state.courses.data);

  return courses.filter((course) => {
    return course.isPublished == false && course.username == GetEmailCurrentUser(state)
  }).sort(function (a, b) {
    if (a.updatedAt < b.updatedAt) {
      return 1;
    }
    if (a.updatedAt > b.updatedAt) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });;
}

// Subject Selector

export const getSubjectsByCourseId = (state, courseId) => {

  const subjects = Object.values(state.subjects.data);

  return subjects.filter((subject) => {
    return subject.courseId == courseId
  }).sort(compareValuesCreatedAt('createdAt', 'desc'));;
}

// Content Selector

export const getContentsBySubjectId = (state, subjectId) => {

  const contents = Object.values(state.contents.data);

  return contents.filter((content) => {
    return content.subjectId == subjectId
  });
}

//userContent Selector 
export const getUserContentsByUsername = (state) => {

  const userContents = Object.values(state.userContents);

  return userContents.filter((userContent) => {
    return userContent.username == GetEmailCurrentUser(state)
  });
}

//Question Selector

export const getQuestionsByCourseId = (state, courseId) => {

  const questions = Object.values(state.questions.data);

  return questions.filter((question) => {
    return question.courseId == courseId
  }).sort(compareValuesCreatedAt('createdAt', 'desc'));
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
    return userCourse.isEnd == true && userCourse.username == GetEmailCurrentUser(state)
  }).sort(compareValuesCreatedAt('createdAt', 'desc'));
}

export const getUserCoursesNotFinishedByUser = (state) => {

  const userCourses = Object.values(state.userCourses.data);

  return userCourses.filter((userCourse) => {
    return userCourse.isEnd == false && userCourse.username == GetEmailCurrentUser(state)
  }).sort(compareValuesCreatedAt('createdAt', 'desc'));
}

export const getUserCoursesByUser = (state) => {

  const userCourses = Object.values(state.userCourses.data);

  return userCourses.filter((userCourse) => {
    return userCourse.username == GetEmailCurrentUser(state)
  });
}

// category selector
export const getDataOrderByCreatedAt = (data, counter) => {

  const categories = Object.values(data);

  return categories.sort(compareValuesCreatedAt('createdAt', 'desc')).slice(0, counter);
}

export const getAllCategories = (data) => {

  const categories = Object.values(data);

  return categories;
}
