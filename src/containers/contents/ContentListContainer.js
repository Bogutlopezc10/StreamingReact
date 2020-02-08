import React from 'react';
import ContentList from '../../components/contents/ContentList';
import ContentCreateContainer from '../../containers/contents/ContentCreateContainer';
import ContentEditContainer from '../../containers/contents/ContentEditContainer';
import { connect } from 'react-redux';
import { fetchContents, isCreatingContent, isNotCreatingContent, fecthEditingContent } from '../../actions/content';
import { getContentsBySubjectId } from '../../selectors/index';

class ContentListContainer extends React.Component{
    componentDidMount(){
        this.props.fetchContents(this.props.subjectId);
    }

    onClickIsCreatingContent = () => {
        this.props.isCreatingContent();
    }

    onClickIsEditingContent = (contentId) => {
        this.props.fecthEditingContent(contentId);
    }

    render(){
        if(this.props.isCreating){
            return (
                <>
                    <ContentCreateContainer subjectId={this.props.subjectId} />
                </>
            );
        }else if(this.props.isEditing){
            return (
                <>
                    <ContentEditContainer />
                </>
            );
        }else{
            return(
                <>
                    <ContentList contents={this.props.contents} onClickIsEditingContent={this.onClickIsEditingContent} onClickIsCreatingContent={this.onClickIsCreatingContent} />
                </>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { 
        contents: getContentsBySubjectId(state,ownProps.subjectId),
        isCreating: state.contents.isCreating,
        isEditing: state.contents.isEditing
    }
}

export default connect(mapStateToProps, {fetchContents, isCreatingContent, isNotCreatingContent, fecthEditingContent})(ContentListContainer);