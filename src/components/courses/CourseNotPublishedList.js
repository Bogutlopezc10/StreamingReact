import React from 'react';
import CourseNotPublished from './CourseNotPublished';
import { Link } from 'react-router-dom';

class CourseNotPublishedList extends React.Component{
    
    renderData(){
        const { courses, loadingCourse } = this.props;

        if(courses.length == 0 && loadingCourse){
            return (
                <>
                    LOADING..........
                </>
            )
        }
        if(courses.length == 0 && !loadingCourse){
            return (
                <>
                    NO HAY DATOS PARA CARGAR
                </>
            )
        }

        return(
            <>
                {courses.map( course => 
                    <CourseNotPublished key={course.id} course={course}/>
                )}
            </>
        )
    }
    render(){
        const {borderTopColor} = this.props;
        return(
            <>
                <div className="container mb-3">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-auto">
                            <h1 className="title-published">Mis cursos no publicados</h1>
                        </div>
                        <div className="col-auto btn-create">
                            <Link className="btn btn-outline-success" to="/courses/Create">
                                <div>
                                    <p className="d-inline">CREAR CURSO</p> 
                                    <i className="d-inline fas fa-plus-circle ml-2 mt-2"></i>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container course-shadow container-published pt-4 px-4 testimonial-group" style={{ borderTopColor: borderTopColor }}>
                    <div className="row">
                        {this.renderData()}
                    </div>
                </div>
            </>
        );
    }
}

export default CourseNotPublishedList;