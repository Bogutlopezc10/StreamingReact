import React from 'react';
import { isNotEditingSubject } from '../../actions/subject';
import { connect } from 'react-redux';
import SubjectEdit from '../../components/subjects/SubjectEdit';

class SubjectEditContainer extends React.Component{
    onClickIsNotEditing = () => {
        this.props.isNotEditingSubject();
    }

    render(){
        return (
            <>
                <SubjectEdit onClickIsNotEditing={this.onClickIsNotEditing} currentSubject={this.props.currentSubject} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { currentSubject: state.subjects.currentSubject }
}

export default connect(mapStateToProps,{ isNotEditingSubject })(SubjectEditContainer);