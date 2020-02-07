import React from 'react';
import './Content.css'

const Content = ({ content }) =>{
    return(
        <div className="col-3">
            <div className="card shadow-sm">
                <iframe src={content.url}
                height="150" frameBorder="0" style={{ width: "100%" }} allowFullScreen></iframe>   
                <div className="card-body">
                    <p>{content.name}</p>
                </div> 
            </div>
        </div>
    );
}

export default Content;