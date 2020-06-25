import React from 'react'
import './Player.css';

class ContentPlayer extends React.Component{
    
    isReadContent(){
        const {userContents, content} = this.props;
        const isRead = userContents.some(e=> e.contentId === content.id);

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
        const{content,onClickCurrentContentPlayer, currentContent} = this.props;
        var classNameContainer = 'col-12 p-3 container-player-content'
        var classNameIcon = 'd-inline fas fa-play-circle'
        if(currentContent){
            if(currentContent.id === content.id){
                classNameContainer = 'col-12 p-3 container-player-content selected-content'
                classNameIcon = 'd-inline fas fa-play-circle selected-icon'
            }
        }
        return(
            <div onClick={() => onClickCurrentContentPlayer(content.id)} className={classNameContainer}>
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
                                <i className={classNameIcon}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentPlayer;