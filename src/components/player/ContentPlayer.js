import React from 'react'

const ContentPlayer = ({content}) =>{
    return(
        <div className="col-lg-12 p-3 container-player-content">
            <div className="row">
                <div className="col-lg-12 mb-1">
                    <h5>
                        {content.name}
                    </h5>
                </div>
                <div className="col-lg-12">
                    <i className="d-inline fas fa-play-circle"></i>
                    <p className="d-inline ml-2">6 min.</p>
                </div>
            </div>
        </div>
    )
}

export default ContentPlayer;