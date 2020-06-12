import React from 'react'
import Question from './Question'
import Spinner from '../Spinner';
import EmptyData from '../EmptyData';
import Accordion from 'react-bootstrap/Accordion';

class QuestionList extends React.Component{

    renderData = () => {
        const {questions, courseName, id, onClickEditQuestion, loadingQuestions } = this.props;

        if(questions.length === 0 && loadingQuestions){
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
        else if(questions.length === 0 && !loadingQuestions){
            return(
                <>
                    <div className="row d-flex align-items-center justify-content-center" style={{height:"250px"}}>
                        <div className="col-auto">
                            <EmptyData 
                                message="El curso no tiene preguntas." 
                                heightImage="150px"
                                widthImage="150px" 
                                marginBottom="5px" 
                            />
                        </div>
                    </div>
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