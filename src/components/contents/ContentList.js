import React from 'react';
import EmptyData from '../EmptyData';
import Content from './Content';

class ContentList extends React.Component{
    renderButton = () => {
        return(
            <div className="row mb-3 align-items-center justify-content-between">
                <div className="col-auto">
                    <h1 className="title-content">Contenidos</h1>
                </div>
                <div className="col-auto">
                    <button onClick={this.props.onClickIsCreatingContent} className="btn btn-outline-success">
                        <div>
                            <p className="d-inline">CREAR CONTENIDO</p> 
                            <i className="d-inline fas fa-cog ml-2 mt-2"></i>
                        </div>
                    </button>
                </div>
            </div>
        );
    }

    render(){
        if(this.props.contents.length === 0){
            return (
                <div className="container">
                    {this.renderButton()}
                    <hr/>
                    <div className="row d-flex align-items-center justify-content-center" style={{height:"150px"}}>
                        <div className="col-auto" >
                            <EmptyData 
                                message="El tema no tiene contenidos." 
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
                <div className="container border pt-3 arrow-group">
                    <div className="row">
                        { this.props.contents.map( content =>
                            <Content 
                            onClickIsEditingContent={this.props.onClickIsEditingContent} 
                            key={content.id} content={content} 
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

export default ContentList;