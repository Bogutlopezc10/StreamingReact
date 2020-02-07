import React from 'react'
import SubjectDelete from '../../components/subjects/SubjectDelete'
import {fetchSubject} from '../../actions/subject'
import {connect} from 'react-redux'
import {getById} from '../../selectors/index';
import {scrollUp} from '../../scroll'

class SubjectDeleteContainer extends React.Component {

    componentDidMount(){
        scrollUp();
        this.props.fetchSubject(this.props.subjectId);
    }
    render(){
        return(
            <> 
                <SubjectDelete
                 subject ={this.props.subject}
                 subjectId={this.props.subjectId}
                 backgroundHeaderColor="#005385"
                />
            </>
        )
    }
}


const mapToStateMapProps =(state, ownProps) =>{
    return {subject:getById(state.subjects.data,ownProps.subjectId)}
}

export default connect(mapToStateMapProps, {fetchSubject})(SubjectDeleteContainer);