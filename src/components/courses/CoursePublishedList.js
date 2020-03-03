import React from 'react';
import './Course.css'
import CoursePublished from './CoursePublished';

class CoursePublishedList extends React.Component{

    renderTitlePublished = (teacher) => {
        if(teacher){
            return(
                <div className="container mb-3">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                            <h1 className="title-published">Mis cursos publicados</h1>
                        </div>
                    </div>
                </div>
            )
        }else{
            return <></>
        }
    }

    renderData(){
        const { courses, loadingCourse, teacher, customizeButton } = this.props;

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
                    <CoursePublished key={course.id} course={course} teacher={teacher} customizeButton={customizeButton} />
                )}
            </>
        )
    }
    render(){
        const { borderTopColor, teacher } = this.props;
        return (
            <>
                {this.renderTitlePublished(teacher)}
                <div className="container course-shadow container-published pt-4 px-4 mb-5 testimonial-group" style={{ borderTopColor: borderTopColor }}>
                    <div className="row">
                        {this.renderData()}
                    </div>
                </div>
            </>
        );
    }
}

export default CoursePublishedList;