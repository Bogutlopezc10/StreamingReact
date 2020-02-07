import React from 'react'
import SubjectDeleteContainer from '../../containers/subjects/SubjectDeleteContainer'


const SubjectDeletePage = (props) => {

    return(
        
        <SubjectDeleteContainer subjectId={props.match.params.id} name = {props.match.params.SubjectName}/>
    )
}


export default SubjectDeletePage;