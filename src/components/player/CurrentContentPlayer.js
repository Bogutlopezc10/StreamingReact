import React from 'react'

class CurrentContentPlayer extends React.Component{

    render(){
        return(
            <div className="container-current-player">
                <iframe src={this.props.currentContent.url.replace('watch?v=','embed/')}
                height="100%" frameBorder="0" style={{ width: "100%" }} allowFullScreen></iframe>   
            </div>
        )
    }
}

export default CurrentContentPlayer;