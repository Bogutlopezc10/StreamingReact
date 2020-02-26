import React from 'react'
import {Field} from 'redux-form';
class OptionExam extends React.Component {

    render(){
        const {questionId, option} = this.props;
        return(
            
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mt-2">
                <div className="row">
                     <div className="col-1" style={{ marginTop: "1.5px" }}>
                        <Field name={`opcion${questionId}`} component="input"  type="radio" value = {`${option.id}`}/>{' '}
                     </div>
                     <div className="col-10">
                        <span className="option-exam">{option.content}</span>
                     </div>
                </div>
                
            </div>
        )
    }
}

export default OptionExam;
