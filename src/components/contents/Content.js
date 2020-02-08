import React from 'react';
import './Content.css'

const Content = ({ content }) =>{
    
    return(
        <div className="col-3 mb-3">
            <div className="card shadow">
                <iframe src={content.url.replace('watch?v=','embed/')}
                height="150" frameBorder="0" style={{ width: "100%" }} allowFullScreen></iframe>   
                <div className="card-body content-name">
                    <p>{content.name}</p>
                </div> 
            </div>
        </div>
    );
}

export default Content;