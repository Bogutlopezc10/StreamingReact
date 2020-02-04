import React from 'react'
import Error from '../components/Error'
import MainHeader from '../components/MainHeader'
import { connect } from 'react-redux';
import {updateErrorUnmount} from '../actions/error'
class ErrorContainer extends React.Component {

    componentWillUnmount(){
        this.props.updateErrorUnmount()
    }
    render(){
        return(
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Error" />
                <Error error={this.props.error}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {

    return ({ error: state.error})

}

export default connect(mapStateToProps,{updateErrorUnmount})(ErrorContainer);