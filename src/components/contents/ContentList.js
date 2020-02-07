import React from 'react';
import Content from './Content';

const ContentList = ({ contents }) =>{
    return (
        <div className="container">
            { contents.map( content =>
                <Content key={content.id} content={content} />
            )}
        </div>
    );
}

export default ContentList;