import React from 'react';
import Button from 'react-bootstrap/Button';
import Subject from './Subject';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import './Subject.css'

const SubjectList = ({ borderTopColor, subjects, onClickEditSubject }) => {
    return (
        <>
            <div className="container shadow container-subject p-4" style={{ borderTopColor: borderTopColor }}>
                <Accordion defaultActiveKey="0">
                    { subjects.map( subject => 
                        <Subject onClickEditSubject={onClickEditSubject} key={subject.id} subject={subject} />
                    )}
                </Accordion>
            </div>
        </>
    );
}

export default SubjectList;