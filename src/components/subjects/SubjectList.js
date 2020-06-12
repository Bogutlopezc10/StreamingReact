import React from 'react';
import Subject from './Subject';
import Accordion from 'react-bootstrap/Accordion';
import Spinner from '../Spinner';
import EmptyData from '../EmptyData';
import './Subject.css'

class SubjectList extends React.Component{

    renderData = () => {
        const {subjects, onClickEditSubject, onClickUnMountContent, courseName, courseId, loadingSubjects } = this.props;

        if(subjects.length === 0 && loadingSubjects){
            return(
                <>  
                    <div className="row d-flex align-items-center justify-content-center" style={{height:"250px"}}>
                        <div className="col-auto">
                            <Spinner />
                        </div>
                    </div>     
                </>
            )
        }
        else if(subjects.length === 0 && !loadingSubjects){
            return(
                <>
                    <div className="row d-flex align-items-center justify-content-center" style={{height:"250px"}}>
                        <div className="col-auto">
                            <EmptyData 
                                message="El curso no tiene temas." 
                                heightImage="150px"
                                widthImage="150px" 
                                marginBottom="5px" 
                            />
                        </div>
                    </div>
                </>
            )
        }
        else{
            return(
                <Accordion>
                    { subjects.map( subject => 
                        <Subject 
                            onClickEditSubject={onClickEditSubject} 
                            key={subject.id} subject={subject} 
                            courseName={courseName}
                            courseId={courseId}
                            onClickUnMountContent={onClickUnMountContent}
                        />
                    )}
                </Accordion>
            )
        }
    }
    render(){
        const { borderTopColor} = this.props;
        return (
            <>
                <div className="container subject-shadow container-subject p-4" style={{ borderTopColor: borderTopColor }}>
                    {this.renderData()}
                </div>
            </>
        );
    }
}

export default SubjectList;