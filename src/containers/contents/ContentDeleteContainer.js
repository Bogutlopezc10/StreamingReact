import React from 'react'
import ContentDelete from '../../components/contents/ContentDelete'
import {fetchContent} from '../../actions/content'
import {scrollUp} from '../../scroll'
import {connect} from 'react-redux'
import {getById} from '../../selectors/index'

class ContentDeleteContainer extends React.Component{


    componentDidMount(){
        scrollUp();
        this.props.fetchContent(this.props.contentId);
    }
    render(){
        //console.log(this.props.content)
        return(
            <>
                <ContentDelete
                    contentId={this.props.contentId} 
                    courseName = {this.props.CourseName}
                    content = {this.props.content}
                    courseId ={this.props.courseId}
                    backgroundHeaderColor="#005385"
                 />
            </>
        )
    }
}

const mapToStateMapProps =(state, ownProps) =>{
    return {content:getById(state.contents.data,ownProps.contentId)}
}

export default connect(mapToStateMapProps, {fetchContent})(ContentDeleteContainer);