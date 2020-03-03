import React from 'react';
import Subject from './Subject';
import Accordion from 'react-bootstrap/Accordion';
import './Subject.css'

class SubjectList extends React.Component{

    renderData = () => {
        const {subjects, onClickEditSubject, onClickUnMountContent, courseName, courseId, loadingSubjects } = this.props;

        if(subjects.length == 0 && loadingSubjects){
            return(
                <>
                    LOADING......
                </>
            )
        }
        else if(subjects.length == 0 && !loadingSubjects){
            return(
                <>
                    NO HAY TEMAS 
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