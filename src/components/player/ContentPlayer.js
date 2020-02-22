import React from 'react'
import {Link} from 'react-router-dom';
import './Player.css';

class ContentPlayer extends React.Component{
    
    isReadContent(){
        const {userContents, content} = this.props;
        const isRead = userContents.some(e=> e.contentId == content.id);

        if(isRead){
            return(
                <i className="fas fa-check-square icon-check"></i>
            )
        }
        return(
            <i className="far fa-square icon-uncheck"></i>
        )
    }
    render(){
        const{content} = this.props;
        return(
            <div className="col-12 p-3 container-player-content">
                <div className="row">
                    <div className="col-1 ml-2 d-flex align-items-center justify-content-center">
                        {this.isReadContent()}
                    </div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-12 mb-1">
                                <h5>
                                    {content.name}
                                </h5>
                            </div>
                            <div className="col-12">
                                <i className="d-inline fas fa-play-circle"></i>
                                <p className="d-inline ml-2">6 min.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentPlayer;