import React from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { connect } from 'react-redux';
import { getContentsBySubjectId } from '../../selectors/index';
import ContentListPlayerContainer from '../../containers/player/ContentListPlayerContainer'

class SubjectPlayer extends React.Component{
    render(){
        const { subject, amountContent,numSubject } = this.props;
        return(
            <>
                <Card className="card-content-course">
                    <Accordion.Toggle as={Card.Header} eventKey={numSubject}>
                        <div className="row d-flex align-items-center justify-content-between" style={{ position: "relative" }}>
                            <div className="col-auto">
                                <div className="row">
                                    <div className="col-lg-11 card-header-player">
                                        {numSubject}. {subject.name}
                                    </div>
                                    <div className="col-lg-12">
                                        <small style={{ color:"gray" }}>{amountContent}/{amountContent} contenidos</small>
                                    </div>
                                </div>
                            </div>
                            <i className="icon-change fas fa-angle-down"></i>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={numSubject}>
                        <Card.Body style={{ padding:"0px"}}>
                        <ContentListPlayerContainer
                            subjectId={subject.id} 
                        />
                        </Card.Body>
                    </Accordion.Collapse>              
                </Card>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { amountContent: getContentsBySubjectId(state,ownProps.subject.id).length }
}


export default connect(mapStateToProps,null)(SubjectPlayer);