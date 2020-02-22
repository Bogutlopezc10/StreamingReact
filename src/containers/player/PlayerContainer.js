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
                <MainHeader backgroundHeaderColor="#005385" player={true} textHeader="Reproductor del curso" />
                <div className="row">
                    <div className="col-lg-8">
                        <CoursePlayerContainer
                            userCourseId = {userCourseId}
                        />
                         <CurrentContentPlayerContainer />
                    </div>
                    <div className="col-lg-4">
                        <SubjectListPlayerContainer 
                            courseId={courseId}
                        />
                    </div>
                    <div>

                    </div>
                </div>
            </>
        );
    }
}

export default PlayerContainer;