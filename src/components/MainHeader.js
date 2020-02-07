import React from 'react';
import './MainHeader.css'
import {scrollUp} from '../scroll'

class MainHeader extends React.Component{
    
    componentDidMount(){
        scrollUp()
    }
    render(){
        return(
            <div className="header-main d-flex align-items-center justify-content-center mb-5" style={{ backgroundColor: this.props.backgroundHeaderColor}}>
                <h1>{this.props.textHeader}</h1>
            </div>
        );
    }
}

export default MainHeader;