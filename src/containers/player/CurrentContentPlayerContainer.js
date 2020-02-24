import React from 'react'
import CurrentContentPlayer from '../../components/player/CurrentContentPlayer'
import {connect} from 'react-redux'

class CurrentContentPlayerContainer extends React.Component{
    
    render(){
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