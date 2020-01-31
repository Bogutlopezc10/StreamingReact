import React from 'react';
import CourseDetailContainer from '../../containers/courses/CourseDetailContainer';

const CourseDetailPage = (props) => {
    console.log(props.match.params);
    return(
        <div>
            <CourseDetailContainer courseId={props.match.params.id}/>
        </div>
    )
}

export default CourseDetailPage;