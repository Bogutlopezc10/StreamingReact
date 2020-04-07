import React from 'react'
import {connect} from 'react-redux'
import {fetchContents} from '../../actions/content'
import {getContentsBySubjectId} from '../../selectors/index'
import ContentListPlayer from '../../components/player/ContentListPlayer'
import {fetchUserContentByUserName} from '../../actions/userContent'
import {getUserContentsByUsername} from '../../selectors/index'
import {fetchContentCurrentPlayer,unMountCourseContent} from '../../actions/content'

class ContentListPlayerContainer  extends React.Component{

    componentDidMount(){
        this.props.fetchUserContentByUserName()
    }

    onClickCurrentContentPlayer = (id) =>{
        this.props.fetchContentCurrentPlayer(id);
    }

    componentWillUnmount(){
        this.props.unMountCourseContent()
    }
    render(){
        return(
            <>
                <ContentListPlayer
                    contents = {this.props.contents}
                    userContents = {this.props.userContents}
                    onClickCurrentContentPlayer = {this.onClickCurrentContentPlayer}
                    currentContent={this.props.currentContent}
                />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {
        contents: getContentsBySubjectId(state,ownProps.subjectId),
        userContents: getUserContentsByUsername(state),
        currentContent: state.contents.currentPlayerContent
    }
}

export default connect(mapStateToProps,
     {
         fetchUserContentByUserName, 
         fetchContentCurrentPlayer,
         unMountCourseContent
    })(ContentListPlayerContainer);
