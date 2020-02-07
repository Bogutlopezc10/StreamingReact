import React from 'react';
import Content from './Content';

const ContentList = ({ contents }) =>{
    if(contents.length == 0){
        return <div>El tema no tiene contenidos.</div>
    }
    return (
        <div className="container">
            <div className="row">
                { contents.map( content =>
                    <Content key={content.id} content={content} />
                )}
            </div>
        </div>
    );
}

export default ContentList;