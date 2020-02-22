import React from 'react'

class CurrentContentPlayer extends React.Component{

    render(){
        return(
        <div className="col-lg-8 col-md-4 col-sm-6 col-xs-6 mb-3">
            <div className="card card-shadow">
                <iframe src={this.props.currentContent.url.replace('watch?v=','embed/')}
                height="400" frameBorder="0" style={{ width: "100%" }} allowFullScreen></iframe>   
                <div className="card-body content-name">
                    <p>{this.props.currentContent.name}</p>
                </div> 
            </div>
        </div>
        )
    }
}

export default CurrentContentPlayer;