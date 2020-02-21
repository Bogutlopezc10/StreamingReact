import React from 'react'
import {connect} from 'react-redux'
import {fetchContents} from '../../actions/content'
import {getContentsBySubjectId} from '../../selectors/index'
import ContentListPlayer from '../../components/player/ContentListPlayer'
import {fetchUserContentByUserName} from '../../actions/userContent'
import {getUserContentsByUsername} from '../../selectors/index'

class ContentListPlayerContainer  extends React.Component{

    componentDidMount(){
        this.props.fetchContents(this.props.subjectId)
        this.props.fetchUserContentByUserName()
    }
    render(){
        return(
            <>
                <ContentListPlayer
                    contents = {this.props.contents}
                    userContents = {this.props.userContents}
                />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {
        contents: getContentsBySubjectId(state,ownProps.subjectId),
        userContents: getUserContentsByUsername(state, "Mr. Sample")
    }
}

export default connect(mapStateToProps, {fetchContents, fetchUserContentByUserName})(ContentListPlayerContainer);