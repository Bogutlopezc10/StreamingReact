import React from 'react'
import PlayerContainer from '../containers/player/PlayerContainer'

const PlayerPage = (props) =>{

    return(
        <div className="main-container">
            <PlayerContainer
                courseId = {props.match.params.courseId}
                userCourseId = {props.match.params.userCourseId}
            />
        </div>
    );
}


export default PlayerPage;