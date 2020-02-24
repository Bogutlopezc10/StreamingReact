import React from 'react'
import './Player.css'

class CurrentContentPlayer extends React.Component{

    render(){
        if(!this.props.currentContent){
            return(
                <div className="col-lg-8 col-current">
                    Aun no hay un video
                </div>
            )
        }
        return(
            <div className="col-lg-8 col-current">
                <div className="container-current-player">
                    <iframe allow="autoplay" src={this.props.currentContent.url.replace('watch?v=','embed/').concat("?autoplay=1&enablejsapi=1")}
                    height="100%" frameBorder="0" style={{ width: "100%" }} allowFullScreen></iframe>   
                </div>
            </div>
        )
    }
}

export default CurrentContentPlayer;