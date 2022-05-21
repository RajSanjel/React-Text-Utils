import React from 'react'
import {Link} from 'react-router-dom'


export default function NotFound() {
    return (
        <div class="container">
            <h1>404</h1>
            Page not Found
            <Link to="/">Go back to homepage...</Link>
        </div>
    )
}

