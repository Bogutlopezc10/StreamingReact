import React from 'react'
import OptionCreate from '../../components/options/OptionCreate'
import MainHeader from '../../components/MainHeader'

class OptionCreateContainer extends React.Component{

    render(){
        return(
            <>
                <MainHeader backgroundHeaderColor="#005385" textHeader="Crear opciones" />
                <OptionCreate 
                     courseName={this.props.courseName}
                     courseId = {this.props.courseId}
                     questionId = {this.props.questionId}
                     borderTopColor="#2185d0"
                />
            </>
        )
    }
}

export default OptionCreateContainer;