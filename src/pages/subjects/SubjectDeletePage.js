import React from 'react'
import SubjectDeleteContainer from '../../containers/subjects/SubjectDeleteContainer'


const SubjectDeletePage = (props) => {

    return(
        
        <SubjectDeleteContainer 
            subjectId={props.match.params.subjectId} 
            courseName = {props.match.params.CourseName}
            courseId ={props.match.params.id}
        />
    )
}


export default SubjectDeletePage;