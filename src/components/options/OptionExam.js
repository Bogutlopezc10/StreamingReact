import React from 'react'
import {Field} from 'redux-form';
class OptionExam extends React.Component {

    render(){
        const {questionId, option} = this.props;
        return(
            <label>
                <Field name={`opcion${questionId}`} component="input"  type="radio" value = {`${option.id}`}/>{' '}
                {option.content}
            </label>
        )
    }
}

export default OptionExam;
