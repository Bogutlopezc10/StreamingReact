import React from 'react'
import {connect} from 'react-redux'
import {fetchContents} from '../../actions/content'
import {getContentsBySubjectId} from '../../selectors/index'
import ContentListPlayer from '../../components/player/ContentListPlayer'

class ContentListPlayerContainer  extends React.Component{

    componentDidMount(){
        this.props.fetchContents(this.props.subjectId)
    }
    render(){
        return(
            <>
                <ContentListPlayer
                    contents = {this.props.contents}
                />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {contents: getContentsBySubjectId(state,ownProps.subjectId)}
}

export default connect(mapStateToProps, {fetchContents})(ContentListPlayerContainer);