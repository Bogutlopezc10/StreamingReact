import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from '../pages/HomePage';
import Footer from './Footer';
import history from '../history';
import CategoryPage from '../pages/categories/CategoryPage';
import CoursePage from '../pages/courses/CoursePage';
import CourseByCategoryPage from '../pages/courses/CourseByCategoryPage';
import CourseDetailPage from '../pages/courses/CourseDetailPage';
import TeacherPage from '../pages/TeacherPage';
import CourseCreatePage from '../pages/courses/CourseCreatePage';
import CourseEditPage from '../pages/courses/CourseEditPage';
import CourseDeletePage from '../pages/courses/CourseDeletePage';
import ErrorPage from '../pages/ErrorPage';
import ModalReact from './ModalReact';
import CourseContentPage from '../pages/courses/CourseContentPage';
import CoursePostPage from '../pages/courses/CoursePostPage';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                        <Switch>
                            <Route path="/" exact component={HomePage} />
                            <Route path="/categories" exact component={CategoryPage} />
                            <Route path="/courses" exact component={CoursePage} />
                            <Route path="/courses/:CategoryName/:id" exact component={CourseByCategoryPage} />
                            <Route path="/courses/Detail/:CourseName/:id" exact component={CourseDetailPage} />
                            <Route path="/teacher" exact component={TeacherPage} />
                            <Route path="/courses/Create" exact component={CourseCreatePage} />
                            <Route path="/courses/Edit/:CourseName/:id" exact component={CourseEditPage} />
                            <Route path="/courses/Delete/:CourseName/:id" exact component={CourseDeletePage} />
                            <Route path="/courses/Content/:CourseName/:id" exact component={CourseContentPage} />
                            <Route path="/courses/Post/:CourseName/:id" exact component={CoursePostPage} />
                            <Route path="/errors" exact component={ErrorPage} />
                            <Route path="/modal" exact component={ModalReact} />
                        </Switch>
                    <Footer />
                </div>
            </Router>    
        </div>
    );
};

export default App;