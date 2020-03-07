import React from 'react'
import Option from '../../components/options/Option'
import { Link } from 'react-router-dom';
import EmptyData from '../EmptyData';
import './Option.css'

class OptionList extends React.Component{

    renderButton = () => {
        if(this.props.options.length == 0){
            return(
                <div className="row mb-3 align-items-center justify-content-between">
                    <div className="col-auto">
                        <h1 className="title-content">Opciones</h1>
                    </div>
                    <div className="col-auto">
                        <Link to={`/options/Create/${this.props.courseName}/${this.props.courseId}/${this.props.questionId}`} className="btn btn-outline-success">
                            <div>
                                <p className="d-inline">AGREGAR OPCIONES</p> 
                                <i className="d-inline fas fa-plus-circle ml-2 mt-2"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            )
        }
        return(
            <div className="row mb-3 align-items-center justify-content-between">
                <div className="col-auto">
                    <h1 className="title-content">Opciones</h1>
                </div>
                <div className="col-auto">
                    <Link to={`/options/Edit/${this.props.courseName}/${this.props.courseId}/${this.props.questionId}`} className="btn btn-menu-options course-button">
                        <div>
                            <p className="d-inline">EDITAR OPCIONES</p> 
                            <i className="d-inline fas fa-edit ml-2 mt-2"></i>
                        </div>
                    </Link>
                    <Link to={`/options/Delete/${this.props.courseName}/${this.props.courseId}/${this.props.questionId}`} className="btn btn-menu-options ml-3 btn-outline-danger">
                        <div>
                            <p className="d-inline">ELIMINAR OPCIONES</p> 
                            <i className="d-inline fas fa-trash-alt ml-2 mt-2"></i>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }


    render(){
        if(this.props.options.length == 0){
            return (
                <div className="container">
                    {this.renderButton()}
                    <hr/>
                    <div className="row d-flex align-items-center justify-content-center" style={{height:"150px"}}>
                        <div className="col-auto" >
                            <EmptyData 
                                message="La pregunta no tiene opciones." 
                                heightImage="110px"
                                widthImage="110px" 
                            />
                        </div>  
                    </div>
                </div>
            );
        }
        return (
            <>
                <div className="container">
                    {this.renderButton()}
                </div>
                <div className="container border-bottom border-top border-color">
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