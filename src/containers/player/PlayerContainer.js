import React from 'react'
import MainHeader from '../../components/MainHeader'
import SubjectListPlayerContainer from '../../containers/player/SubjectListPlayerContainer'
import CoursePlayerContainer from '../../containers/player/CoursePlayerContainer'

class PlayerContainer extends React.Component{

    render(){
        const {courseId, userCourseId} = this.props
        return(
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Reproductor de videos" />
                <SubjectListPlayerContainer 
                    courseId={courseId}
                />
                <CoursePlayerContainer
                    userCourseId = {userCourseId}
                />
            </>
        );
    }
}

export default PlayerContainer;