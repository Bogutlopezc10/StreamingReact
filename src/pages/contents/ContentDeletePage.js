import React from 'react'
import ContentDeleteContainer from '../../containers/contents/ContentDeleteContainer'

const ContentDeletePage  = (props) => {
    return(
        <>
            <ContentDeleteContainer
                contentId={props.match.params.contentId} 
                courseName = {props.match.params.CourseName}
                courseId ={props.match.params.id}
            />
        </>
    )
}

export default ContentDeletePage;