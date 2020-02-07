import React from 'react';

const Content = ({ content }) =>{
    return(
        <div className="row">
            <div className="col-12">
                {content.name}
            </div>
        </div>
    );
}

export default Content;