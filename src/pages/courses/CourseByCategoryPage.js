import React from 'react';
import CourseByCategoryListContainer from '../../containers/courses/CourseByCategoryListContainer';
import './CoursePage.css'

const CourseByCategoryPage = (props) => {
    const { CategoryName, id } = props.match.params;
    return(
        <div className="main-container">
            <CourseByCategoryListContainer categoryId={id} categoryName={CategoryName} />
        </div>
    )
}

export default CourseByCategoryPage;