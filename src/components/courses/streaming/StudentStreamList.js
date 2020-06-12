import React from 'react'
import StudentStream from './../../../components/courses/streaming/StudentStream'
import EmptyData from '../../../components/EmptyData'
import Spinner from '../../../components/Spinner'

class StudentStreamList extends React.Component {

    renderData(){
        const { userCourses, isLoading} = this.props;

        if(userCourses.length === 0 && isLoading){
            return (
                <>
                    <div className="col-auto d-flex align-items-center justify-content-center mb-4" style={{height:"280px"}}>
                        <Spinner />
                    </div>
                </>
            )
        }
        if(userCourses.length === 0 && !isLoading){
            return (
                <>
                    <div className="col-auto d-flex align-items-center justify-content-center mb-4" style={{height:"280px"}}>
                        <EmptyData 
                            message="No hay cursos en vivo." 
                            heightImage="150px"
                            widthImage="150px" 
                            marginBottom="15px"
                        />
                    </div>                 
                </>
            )
        }

        return(
            <>
                {userCourses.map( userCourse => 
                    <StudentStream key={userCourse.id} userCourse={userCourse}/>
                )}
            </>
        )
    }
    render(){
        const { borderTopColor} = this.props;
        return (
            <>
                <div className="container mb-3">
                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                            <h1 className="title-published">En vivo</h1>
                        </div>
                    </div>
                </div>
                <div className="container course-shadow container-published pt-4 px-4 mb-5 testimonial-group" style={{ borderTopColor: borderTopColor }}>
                    <div className="row">
                        {this.renderData()}
                    </div>
                </div>
            </>
        );
    }
}

export default StudentStreamList;