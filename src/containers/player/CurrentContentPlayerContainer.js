import React from 'react'
import CurrentContentPlayer from '../../components/player/CurrentContentPlayer'
import {connect} from 'react-redux'

class CurrentContentPlayerContainer extends React.Component{
    
    render(){
        if(!this.props.currentContent){
            return(
                <div>
                    Aun no hay un video
                </div>
            )
        }
        return(
            <CurrentContentPlayer
                currentContent = {this.props.currentContent}
            /> 
        )
    }
}

const mapStateToProps = (state) =>{
    return {currentContent: state.contents.currentPlayerContent}
}

export default connect(mapStateToProps, null)(CurrentContentPlayerContainer);