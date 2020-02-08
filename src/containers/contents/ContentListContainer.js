import React from 'react';
import ContentList from '../../components/contents/ContentList';
import ContentCreateContainer from '../../containers/contents/ContentCreateContainer';
import { connect } from 'react-redux';
import { fetchContents, isCreatingContent, isNotCreatingContent } from '../../actions/content';
import { getContentsBySubjectId } from '../../selectors/index';

class ContentListContainer extends React.Component{
    componentDidMount(){
        this.props.fetchContents(this.props.subjectId);
    }

    onClickIsCreatingContent = () => {
        this.props.isCreatingContent();
    }

    render(){
        if(this.props.isCreating){
            return (
                <>
                    <ContentCreateContainer subjectId={this.props.subjectId} />
                </>
            );
        }else{
            return(
                <>
                    <ContentList contents={this.props.contents} onClickIsCreatingContent={this.onClickIsCreatingContent} />
                </>
            )
        }
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { 
        contents: getContentsBySubjectId(state,ownProps.subjectId),
        isCreating: state.contents.isCreating
    }
}

export default connect(mapStateToProps, {fetchContents, isCreatingContent, isNotCreatingContent})(ContentListContainer);