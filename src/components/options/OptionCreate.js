import React from 'react'
import {fetchQuestion} from '../../actions/question'
import {createOptions} from '../../actions/option'
import {connect} from 'react-redux'
import OptionForm from '../../components/options/OptionForm'

class OptionCreate extends React.Component{

    componentDidMount(){
        this.props.fetchQuestion(this.props.questionId)
    }

    onSubmit = (options)=>{
        this.props.createOptions(options, this.props.courseName, this.props.courseId);
    }

    render(){
        return(
            <>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6">
                        <div  style={{ borderTopColor: this.props.borderTopColor }} className="container course-shadow container-published p-4">
                            <OptionForm 
                                textButton="LIMPIAR"
                                onSubmit={this.onSubmit}
                                questionId = {this.props.questionId}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(null, {fetchQuestion, createOptions})(OptionCreate);