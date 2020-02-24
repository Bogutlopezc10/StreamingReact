import React from 'react'
import OptionExam from '../../components/options/OptionExam'

class OptionExamList extends React.Component {

    render(){
        return(
            <>
                { this.props.options.map( option =>
                    <OptionExam 
                        key={option.id}
                        option={option}
                        questionId = {this.props.questionId}
                    />
                )}
            </>
        )
    }
}

export default OptionExamList;