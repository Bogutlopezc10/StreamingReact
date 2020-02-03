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

    render(){
        const { courses, borderTopColor, teacher, customizeButton } = this.props;
        return (
            <>
                {this.renderTitlePublished(teacher)}
                <div className="container container-published pt-4 px-4 mb-5 testimonial-group" style={{ borderTopColor: borderTopColor }}>
                    <div className="row">
                        {courses.map( course => 
                            <CoursePublished key={course.id} course={course} teacher={teacher} customizeButton={customizeButton} />
                        )}
                    </div>
                </div>
            </>
        );
    }
}

export default CoursePublishedList;