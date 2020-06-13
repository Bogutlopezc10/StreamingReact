import React from 'react'
import SubjectPlayer from '../../components/player/SubjectPlayer'
import Accordion from 'react-bootstrap/Accordion';
import Spinner from '../Spinner';
import './Player.css';

class SubjectListPlayer extends React.Component{
    
    renderData = () =>{
        const {courseId, subjects} = this.props;

        if(subjects.length === 0){
            return(
                <>
                    <div className="row d-flex align-items-center justify-content-center" style={{height:"100%", marginRight:"0px"}}>
                        <div className="col-auto">
                            <Spinner />
                        </div>
                    </div> 
                </>
            )
        }
        return(
            <>
                <Accordion>
                    { subjects.map( (subject,i) => {
                        const numSubject = i + 1;
                        return(
                            <SubjectPlayer
                                key={subject.id} 
                                subject={subject} 
                                courseId={courseId}
                                numSubject={numSubject}
                            />
                        );
                    })}
                </Accordion>
            </>
        )
    }

    render(){
        return(
            <>
                <div className="col-lg-4 col-subject">
                    <div className="d-flex align-items-center pl-0 container-subject-header">
                        <div className="col-lg-12">
                            <h5>Contenido del curso</h5>
                        </div>
                    </div>
                    <div className="container-subject-player">
                        {this.renderData()}
                    </div>      
                </div>
            </>
        )
    }
}

export default SubjectListPlayer;