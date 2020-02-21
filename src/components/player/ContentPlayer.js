import React from 'react'
import {Link} from 'react-router-dom'

class ContentPlayer extends React.Component{
    
    isReadContent(){
        const {userContents, content} = this.props;
        const isRead = userContents.some(e=> e.contentId == content.id);

        if(isRead){
            return(
                <h1>Leido</h1>
            )
        }
        return(
            <h1>No leido</h1>
        )
    }
    render(){
        const{content} = this.props;
        return(
            <div className="col-lg-12 p-3 container-player-content">
                <div className="row">
                    <div className="col-lg-12 mb-1">
                        <h5>
                            {content.name}
                        </h5>
                        {this.isReadContent()}
                    </div>
                    <div className="col-lg-12">
                        <i className="d-inline fas fa-play-circle"></i>
                        <p className="d-inline ml-2">6 min.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentPlayer;