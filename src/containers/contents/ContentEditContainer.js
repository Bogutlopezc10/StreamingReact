import React from 'react';
import { isNotEditingContent } from '../../actions/content';
import ContentEdit from '../../components/contents/ContentEdit';
import { connect } from 'react-redux';

class ContentEditContainer extends React.Component{
    onClickIsNotEditingContent = () => {
        this.props.isNotEditingContent();
    }

    render(){
        return (
            <>
                <ContentEdit onClickIsNotEditingContent={this.onClickIsNotEditingContent} currentContent={this.props.currentContent} />
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return { currentContent: state.contents.currentContent }
}

export default connect(mapStateToProps,{ isNotEditingContent })(ContentEditContainer);