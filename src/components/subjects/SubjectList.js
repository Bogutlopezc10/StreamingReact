import React from 'react';
import Subject from './Subject';
import Accordion from 'react-bootstrap/Accordion';
import './Subject.css'

const SubjectList = ({ borderTopColor, subjects, onClickEditSubject, onClickUnMountContent, CourseName, courseId }) => {

    return (
        <>
            <div className="container subject-shadow container-subject p-4" style={{ borderTopColor: borderTopColor }}>
                <Accordion>
                    { subjects.map( subject => 
                        <Subject 
                            onClickEditSubject={onClickEditSubject} 
                            key={subject.id} subject={subject} 
                            courseName={CourseName}
                            courseId={courseId}
                            onClickUnMountContent={onClickUnMountContent}
                        />
                    )}
                </Accordion>
            </div>
        </>
    );
}

export default SubjectList;