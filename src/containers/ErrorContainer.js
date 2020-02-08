import React from 'react'
import Error from '../components/Error'
import { connect } from 'react-redux';
import {updateErrorUnmount} from '../actions/error'
import history from '../history'
class ErrorContainer extends React.Component {

    componentWillUnmount(){
        this.props.updateErrorUnmount()
    }
    render(){
        if(!this.props.error.isError){
            history.push('/');
        }
        return(
            <>
                <Error error={this.props.error}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {

    return ({ error: state.error})

}

export default connect(mapStateToProps,{updateErrorUnmount})(ErrorContainer);