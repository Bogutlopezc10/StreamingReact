import React from 'react'
import MainHeader from '../../components/MainHeader'
import SubjectListPlayerContainer from '../../containers/player/SubjectListPlayerContainer'
import CoursePlayerContainer from '../../containers/player/CoursePlayerContainer'
import CurrentContentPlayerContainer from '../../containers/player/CurrentContentPlayerContainer'

class PlayerContainer extends React.Component{

    render(){
        const {courseId, userCourseId} = this.props
        return(
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Reproductor del curso" />
                <div className="container pl-0 pr-0" style={{ boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.75)"}}>
                    <div className="row">
                        <CurrentContentPlayerContainer />
                        <SubjectListPlayerContainer 
                            courseId={courseId}
                        />
                        <CoursePlayerContainer
                            userCourseId = {userCourseId}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default PlayerContainer;