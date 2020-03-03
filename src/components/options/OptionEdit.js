import React from 'react'
import {editOptions} from '../../actions/option'
import {connect} from 'react-redux'
import Spinner from '../Spinner';
import OptionForm from '../../components/options/OptionForm'

class OptionEdit extends React.Component{

    onSubmit = (options)=>{
        this.props.editOptions(options, this.props.courseName, this.props.courseId);
    }

    validateIsCorrect(){
        const {optionsEdit} = this.props

        if(optionsEdit[0].isCorrect){
            return "isCorrect1";
        }
        if(optionsEdit[1].isCorrect){
            return "isCorrect2";
        }
        if(optionsEdit[2].isCorrect){
            return "isCorrect3";
        }
        if(optionsEdit[3].isCorrect){
            return "isCorrect4";
        }
    }

    renderData = () =>{
        const {optionsEdit} = this.props
        if(optionsEdit.length == 0){
            return (
                <>  
                    <div className="row container-spinner-option d-flex align-items-center justify-content-center">
                        <div className="col-auto">
                            <Spinner />
                        </div>
                    </div>
                </>
            )
        }
        return(
            <OptionForm 
                textButton="DESHACER CAMBIOS"
                onSubmit={this.onSubmit}
                questionId = {this.props.questionId}
                initialValues ={{
                    opcion1: optionsEdit[0].content,
                    opcion2: optionsEdit[1].content,
                    opcion3: optionsEdit[2].content,
                    opcion4: optionsEdit[3].content,
                    isCorrect: this.validateIsCorrect()
                }}
            />
        )
    }
    render(){
      
        return(
            <>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <div  style={{ borderTopColor: this.props.borderTopColor }} className="container course-shadow container-published p-4">
                            {this.renderData()}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(null, {editOptions})(OptionEdit);