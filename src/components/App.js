import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from '../pages/HomePage';
import Footer from './Footer';
import history from '../history';
import CategoryPage from '../pages/categories/CategoryPage';
import CategoryCreatePage from '../pages/categories/CategoryCreatePage';
import CategoryEditPage from '../pages/categories/CategoryEditPage';
import CategoryDeletePage from '../pages/categories/CategoryDeletePage';
import CoursePage from '../pages/courses/CoursePage';
import CourseByCategoryPage from '../pages/courses/CourseByCategoryPage';
import CourseDetailPage from '../pages/courses/CourseDetailPage';
import TeacherPage from '../pages/TeacherPage';
import CourseCreatePage from '../pages/courses/CourseCreatePage';
import CourseEditPage from '../pages/courses/CourseEditPage';
import CourseDeletePage from '../pages/courses/CourseDeletePage';
import ErrorPage from '../pages/ErrorPage';
import CourseContentPage from '../pages/courses/CourseContentPage';
import CoursePostPage from '../pages/courses/CoursePostPage';
import SubjectDeletePage from '../pages/subjects/SubjectDeletePage';
import ContentDeletePage from '../pages/contents/ContentDeletePage';
import CourseQuestionPage from '../pages/courses/CourseQuestionPage';
import QuestionDeletePage from '../pages/questions/QuestionDeletePage';
import OptionCreatePage from '../pages/options/OptionCreatePage';
import UserCoursePage from '../pages/userCourses/UserCoursePage';
import OptionEditPage from '../pages/options/OptionEditPage';
import OptionDeletePage from '../pages/options/OptionDeletePage';
import PlayerPage from '../pages/PlayerPage';
import QuestionExamPage from '../pages/questions/QuestionExamPage';
import ValidateAnswersPage from '../pages/ValidateAnswersPage';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/categories" exact component={CategoryPage} />
                            <Route path="/categories/Create" exact component={CategoryCreatePage} />
                            <Route path="/categories/Edit/:CategoryName/:id" exact component={CategoryEditPage} />
                            <Route path="/categories/Delete/:CategoryName/:id" exact component={CategoryDeletePage} />
                            <Route path="/courses" exact component={CoursePage} />
                            <Route path="/courses/:CategoryName/:id" exact component={CourseByCategoryPage} />
                            <Route path="/courses/Detail/:CourseName/:id" exact component={CourseDetailPage} />
                            <Route path="/teacher" exact component={TeacherPage} />
                            <Route path="/userCourses" exact component={UserCoursePage} />
                            <Route path="/courses/Create" exact component={CourseCreatePage} />
                            <Route path="/courses/Edit/:CourseName/:id" exact component={CourseEditPage} />
                            <Route path="/courses/Delete/:CourseName/:id" exact component={CourseDeletePage} />
                            <Route path="/courses/Content/:CourseName/:id" exact component={CourseContentPage} />
                            <Route path="/courses/Post/:CourseName/:id" exact component={CoursePostPage} />
                            <Route path="/subjects/Delete/:CourseName/:id/:subjectName/:subjectId" exact component={SubjectDeletePage} />
                            <Route path="/contents/Delete/:CourseName/:id/:contentName/:contentId" exact component={ContentDeletePage} />
                            <Route path="/questions/:CourseName/:id/" exact component={CourseQuestionPage} />
                            <Route path="/questions/Delete/:CourseName/:id/:questionId" exact component={QuestionDeletePage} />
                            <Route path="/options/Create/:courseName/:courseId/:questionId" exact component={OptionCreatePage} />
                            <Route path="/options/Edit/:courseName/:courseId/:questionId" exact component={OptionEditPage} />
                            <Route path="/options/Delete/:courseName/:courseId/:questionId" exact component={OptionDeletePage} />
                            <Route path="/player/:courseId/:userCourseId" exact component={PlayerPage} />
                            <Route path="/questions/exam/:courseId/:userCourseId" exact component={QuestionExamPage} />
                            <Route path="/ValidateAnswersPage/:courseId/:userCourseId" exact component={ValidateAnswersPage} />
                            <Route path="/errors" exact component={ErrorPage} />
                        </Switch>
                    <Footer />
                </div>
            </Router>    
        </div>
    );
};

export default App;