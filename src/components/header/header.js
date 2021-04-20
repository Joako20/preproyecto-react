import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
function header() {
    return (
        <div className="header-c">
            <Link to="/"><h1>Horizon</h1></Link>
        </div>
    )
}

export default header
