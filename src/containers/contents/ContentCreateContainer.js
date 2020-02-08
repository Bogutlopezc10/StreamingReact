import React from 'react';
import { isNotCreatingContent } from '../../actions/content';
import { connect } from 'react-redux';
import CreateContent from '../../components/contents/ContentCreate';

class ContentCreateContainer extends React.Component{

    onClickIsNotCreatingContent = () => {
        this.props.isNotCreatingContent();
    }

    render(){
        return (
            <CreateContent onClickIsNotCreatingContent={this.onClickIsNotCreatingContent} subjectId={this.props.subjectId} />
        );
    }
}

export default connect(null,{isNotCreatingContent})(ContentCreateContainer);