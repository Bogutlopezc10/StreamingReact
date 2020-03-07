import React from 'react';
import CourseNotPublished from './CourseNotPublished';
import Spinner from '../Spinner';
import EmptyData from '../EmptyData'
import { Link } from 'react-router-dom';

class CourseNotPublishedList extends React.Component{
    
    renderData(){
        const { courses, loadingCourse, colorIcon } = this.props;

        if(courses.length == 0 && loadingCourse){
            return (
                <>
                    <div className="col-auto d-flex align-items-center justify-content-center mb-4" style={{height:"280px"}}>
                        <Spinner />
                    </div>
                </>
            )
        }
        if(courses.length == 0 && !loadingCourse){
            return (
                <>
                    <div className="col-auto d-flex align-items-center justify-content-center mb-4" style={{height:"280px"}}>
                        <EmptyData 
                            message="No se encontraron cursos." 
                            heightImage="150px"
                            widthImage="150px" 
                            marginBottom="10px" 
                        />
                    </div>                  
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
                            <h1 className="title-published">En curso</h1>
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