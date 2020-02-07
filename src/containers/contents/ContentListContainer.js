import React from 'react';
import ContentList from '../../components/contents/ContentList';
import { connect } from 'react-redux';
import { fetchContents } from '../../actions/content';
import { getContentsBySubjectId } from '../../selectors/index';

class ContentListContainer extends React.Component{
    componentDidMount(){
        this.props.fetchContents(this.props.subjectId);
    }

    render(){
        return (
            <>
                <ContentList contents={this.props.contents} />
            </>
        ); 
    }
}

const mapStateToProps = (state, ownProps) =>{
    return { contents: getContentsBySubjectId(state,ownProps.subjectId) }
}

export default connect(mapStateToProps, {fetchContents})(ContentListContainer);