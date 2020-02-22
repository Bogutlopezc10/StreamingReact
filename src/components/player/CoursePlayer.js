import React from 'react'

class CoursePlayer extends React.Component{

    render(){
        return(
            <div>
                {this.props.course.courseName}
                <br></br>
                {this.props.course.progress}
            </div>
        )
    }
}

export default CoursePlayer;