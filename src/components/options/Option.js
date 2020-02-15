import React from 'react'

const Option = ({option, courseName, courseId}) =>{

    return(
        <div>
            <ul>
                <li>
                    <span class="badge badge-primary">{option.isCorrect ? 'Opcion correcta' : ''}</span>
                    <span class="dot"></span>{option.content}
                </li>
            </ul>
        </div>
    )
}

export default Option;