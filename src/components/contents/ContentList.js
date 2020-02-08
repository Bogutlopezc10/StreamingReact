import React from 'react';
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
                            <i className="d-inline fas fa-plus-circle ml-2 mt-2"></i>
                        </div>
                    </button>
                </div>
            </div>
        );
    }

    render(){
        if(this.props.contents.length == 0){
            return (
                <div className="container">
                    {this.renderButton()}
                    <hr/>
                    <div className="row">
                        El tema no tiene contenidos.
                    </div>
                </div>
            );
        }
        return (
            <div className="container">
                {this.renderButton()}
                <hr/>
                <div className="row">
                    { this.props.contents.map( content =>
                        <Content key={content.id} content={content} />
                    )}
                </div>
            </div>
        );
    }
}

export default ContentList;