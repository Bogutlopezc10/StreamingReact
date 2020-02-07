import React from 'react'
import CoursePost from '../../components/courses/CoursePost'
import {CourseCanBePosted} from '../../actions/course'
import {getById} from '../../selectors/index';
import {connect} from 'react-redux'
import {unmountCanBePosted} from '../../actions/success'

class CoursePostContainer extends React.Component {

    componentDidMount(){
        this.props.CourseCanBePosted(this.props.courseId)
    }
    componentWillUnmount(){
        this.props.unmountCanBePosted()
    }
    render (){
        
        return(
            <>
                <CoursePost
                 courseId={this.props.courseId}
                 course={this.props.course}
                 canBeposted={this.props.canBeposted}
                 backgroundHeaderColor="#005385"
                />
            </>
        )
    }
}

const mapToStateMapProps =(state, ownProps) =>{
   return {
       course:getById(state.courses.data,ownProps.courseId),
       canBeposted:state.courses.canBePosted
    }
}

export default connect(mapToStateMapProps,{CourseCanBePosted, unmountCanBePosted})(CoursePostContainer);