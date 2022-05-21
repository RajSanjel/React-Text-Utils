import React from 'react'

export default function About(props) {
    document.title = "About"
    
    return (
        <div className={`container text-${props.mode==='dark'?'light':'dark'} my-3`} >
                <h1>This page was made to test react routing only. Nothing Special Here. Make sure to add some suggestions.</h1>
        </div>
    )
}
