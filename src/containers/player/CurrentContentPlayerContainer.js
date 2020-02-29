import React from 'react'
import CurrentContentPlayer from '../../components/player/CurrentContentPlayer'
import {fetchLastContentByUserNameDescending} from '../../actions/content';
import {connect} from 'react-redux'

class CurrentContentPlayerContainer extends React.Component{
    componentDidMount(){
        this.props.fetchLastContentByUserNameDescending(this.props.courseId);
    }
    
    render(){
        return(
            <CurrentContentPlayer
                currentContent = {this.props.currentContent}
                firstTimePlayer = {this.props.firstTimePlayer}
            /> 
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        currentContent: state.contents.currentPlayerContent,
        firstTimePlayer: state.contents.firstTimePlayer
    }
}

export default connect(mapStateToProps, { fetchLastContentByUserNameDescending })(CurrentContentPlayerContainer);