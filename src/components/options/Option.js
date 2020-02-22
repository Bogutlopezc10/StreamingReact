import React from 'react'

class Option extends React.Component{

    renderBadge = () =>{
        if(this.props.option.isCorrect){
            return <span className="badge ml-4 badge-success badge-pill"><i class="fas fa-check"></i></span>
        }
    }

    render(){
        const { option } = this.props;
        return(
            <div className="col-lg-12 pl-0 pr-0">
                <ul className="list-group">
                    <li className={option.isCorrect ? 'list-group-item d-flex justify-content-between align-items-center border-color-success list-group-item-success':'list-group-item border-color d-flex justify-content-between align-items-center'}>
                        <h5>{option.content}</h5>
                        {this.renderBadge()}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Option;