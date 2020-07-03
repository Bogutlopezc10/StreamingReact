import React from 'react'
import './Player.css'

class CurrentContentPlayer extends React.Component{

    renderAllowPlay = () =>{
        if(this.props.firstTimePlayer){
            return(
                <iframe src={this.props.currentContent.url.replace('watch?v=','embed/')} title = {this.props.currentContent.id}
                height="100%" frameBorder="0" style={{ width: "100%" }} allowFullScreen></iframe>  
            )
        }else{
            return(
                <iframe allow="autoplay" src={this.props.currentContent.url.replace('watch?v=','embed/').concat("?autoplay=1&enablejsapi=1")} title = {this.props.currentContent.id}
                height="100%" frameBorder="0" style={{ width: "100%" }} allowFullScreen></iframe> 
            )
        }
    }

    render(){
        if(!this.props.currentContent){
            return(
                <div className="col-lg-8 col-current">
                    <div className="container-current-player">
                        <img src="/Youtube.jpg" width="100%" height="100%" alt="youtube" />
                    </div>
                </div>
            )
        }
        return(
            <div className="col-lg-8 col-current">
                <div className="container-current-player">
                    {this.renderAllowPlay()} 
                </div>
            </div>
        )
    }
}

export default CurrentContentPlayer;
