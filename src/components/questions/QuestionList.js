import React from 'react'
import Question from './Question'
import Accordion from 'react-bootstrap/Accordion';

const QuestionList = ({questions, courseName, id, borderTopColor, onClickEditQuestion }) =>{

    return(
        <>
            <div className="container subject-shadow container-subject p-4" style={{ borderTopColor: borderTopColor }}>
                <Accordion defaultActiveKey="0">
                    { questions.map( question => 
                        <Question
                            key={question.id}
                            question={question} 
                            courseName={courseName}
                            courseId={id}
                            onClickEditQuestion={onClickEditQuestion}
                        />
                    )}
                </Accordion>
            </div>
        </>
    )
}

export default QuestionList;