import React from 'react'
import Option from '../../components/options/Option'
import { Link } from 'react-router-dom';

class OptionList extends React.Component{

    render(){
        if(this.props.options.length == 0){
            return (
                <div className="container">
                    <hr/>
                    <div className="row">
                        La pregunta no tiene opciones.
                    </div>
                    <Link to ={`/options/Create/${this.props.courseName}/${this.props.courseId}/${this.props.questionId}`} className="btn btn-primary">
                        <div>
                            <p>AGREGAR OPCIONES</p> 
                        </div>
                    </Link>
                </div>
            );
        }
        return (
            <>
                <div className="container border pt-3 arrow-group">
                    <div className="row">
                        { this.props.options.map( option =>
                            <Option 
                                key={option.id}
                                option={option} 
                                courseName ={this.props.courseName}
                                courseId ={this.props.courseId}
                            />
                        )}
                    </div>
                </div>
            </>
        );
    }
}

export default OptionList;