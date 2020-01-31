import React from 'react';
import CourseByCategoryListContainer from '../../containers/courses/CourseByCategoryListContainer';

const CourseByCategoryPage = (props) => {

    return(
        <div>
            <CourseByCategoryListContainer categoryId={props.match.params.id}/>
        </div>
    )
}

export default CourseByCategoryPage;