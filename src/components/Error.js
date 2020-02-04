import React from 'react'

const Error = (props) => {

    console.log(props.error)
    return (
        <div>
            ERROR PAGE
            <h2>{props.error.data}</h2>
            <h2>{props.error.statusText}</h2>
            <h2>{props.error.code}</h2>
        </div>
    )
}

export default Error;