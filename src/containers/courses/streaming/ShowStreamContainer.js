import React from 'react';
import MainHeader from '../../../components/MainHeader'
import ShowStream from '../../../components/courses/streaming/ShowStream';
import {connect} from 'react-redux';
import {fetchCourse} from '../../../actions/course';
import {getById} from '../../../selectors/index';

class ShowStreamContainer extends React.Component{
    componentDidMount(){
        this.props.fetchCourse(this.props.courseId);
    }

    render(){
        return(
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Live" />
                <ShowStream
                    courseId = {this.props.courseId}
                    course = {this.props.course}
                    borderTopColor="#005385"
                />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { course: getById(state.courses.data,ownProps.courseId) }
}

export default connect(mapStateToProps, {fetchCourse})(ShowStreamContainer);