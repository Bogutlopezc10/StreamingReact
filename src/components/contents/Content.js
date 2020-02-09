import React from 'react';
import './Content.css'
import { Link } from 'react-router-dom';

const Content = ({ content,onClickIsEditingContent,courseName, courseId }) =>{
    
    return(
        <div className="col-3 mb-3">
            <div className="card card-shadow">
                <iframe src={content.url.replace('watch?v=','embed/')}
                height="150" frameBorder="0" style={{ width: "100%" }} allowFullScreen></iframe>   
                <div className="card-body content-name">
                    <p>{content.name}</p>
                </div> 
                <button onClick={() => onClickIsEditingContent(content.id)} className="btn btn-primary btn-edit-content">
                    <div>
                        <p>EDITAR</p> 
                        <i className="fas fa-edit mt-1 mb-1"></i>
                    </div>
                </button>
                <Link to={`/contents/Delete/${courseName}/${courseId}/${content.name}/${content.id}`} className="btn btn-danger btn-delete-content">
                    <div>
                        <p>ELIMINAR</p> 
                        <i className="fas fa-times mt-1 mb-1"></i>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Content;