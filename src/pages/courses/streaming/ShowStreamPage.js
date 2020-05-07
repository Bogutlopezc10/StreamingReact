import React from 'react'
import ShowStreamContainer from '../../../containers/courses/streaming/ShowStreamContainer';

const ShowStreamPage = (props) =>{

    return(
        <div className = "main-container">
            <ShowStreamContainer courseId = {props.match.params.courseId} />
        </div>
    )
}

export default ShowStreamPage;