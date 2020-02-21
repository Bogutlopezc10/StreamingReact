import React from 'react'

class CoursePlayer extends React.Component{

    render(){
        return(
            <div>{this.props.course.courseName}</div>
        )
    }
}

export default CoursePlayer;