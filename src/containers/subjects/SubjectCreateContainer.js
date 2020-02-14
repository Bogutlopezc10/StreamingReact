import React from 'react';
import SubjectCreate from '../../components/subjects/SubjectCreate';
import { isCreatingSubject, isNotCreatingSubject } from '../../actions/subject';
import { connect } from 'react-redux';

class SubjectCreateContainer extends React.Component{
    
    onClickIsCreating = () => {
        this.props.isCreatingSubject();
    }

    onClickIsNotCreating = () => {
        this.props.isNotCreatingSubject();
    }


    render(){
        return (
            <> 
                <SubjectCreate 
                 courseId={this.props.courseId} 
                 isCreating={this.props.isCreating} 
                 onClickIsCreating={this.onClickIsCreating} 
                 onClickIsNotCreating={this.onClickIsNotCreating} />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { isCreating: state.subjects.isCreating }
}

export default connect(mapStateToProps,{ isCreatingSubject, isNotCreatingSubject })(SubjectCreateContainer);