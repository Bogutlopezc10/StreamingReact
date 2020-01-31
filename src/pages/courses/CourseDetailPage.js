import React from 'react';
import CourseDetailListContainer from '../../containers/courses/CourseDetailListContainer';

const CourseByCategoryPage = (props) => {

    return(
        <div>
            <CourseDetailListContainer courseId={props.match.params.id}/>
        </div>
    )
}

export default CourseByCategoryPage;