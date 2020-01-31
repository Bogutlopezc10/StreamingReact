import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from '../pages/HomePage';
import Footer from './Footer';
import history from '../history';
import CategoryPage from '../pages/categories/CategoryPage';
import CoursePage from '../pages/courses/CoursePage';
import CourseByCategoryPage from '../pages/courses/CourseByCategoryPage';

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
                            <Route path="/courses/ByCategory/:id" exact component={CourseByCategoryPage} />
                        </Switch>
                    <Footer />
                </div>
            </Router>    
        </div>
    );
};

export default App;