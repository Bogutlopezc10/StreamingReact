import React from 'react'
import Question from './Question'
import Accordion from 'react-bootstrap/Accordion';

class QuestionList extends React.Component{

    renderData = () => {
        const {questions, courseName, id, borderTopColor, onClickEditQuestion, loadingQuestions } = this.props;

        if(questions.length == 0 && loadingQuestions){
            return(
                <>
                    LOADING..........
                </>
            )
        }
        else if(questions.length == 0 && !loadingQuestions){
            return(
                <>
                    NO HAY PREGUNTAS
                </>
            )
        }
        return(
            <>
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
            </>
        )
    }

    render(){
        const {borderTopColor} = this.props;
        return(
            <>
                <div className="container subject-shadow container-subject p-4" style={{ borderTopColor: borderTopColor }}>
                    {this.renderData()}
                </div>
            </>
        )
    }
}

export default QuestionList;