import React from 'react'
import OptionExam from '../../components/options/OptionExam'

class OptionExamList extends React.Component {

    render(){
        return(
            <>
                <div className="row">
                    { this.props.options.map( option =>
                        <OptionExam 
                            key={option.id}
                            option={option}
                            questionId = {this.props.questionId}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default OptionExamList;