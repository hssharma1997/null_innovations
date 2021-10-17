import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


export default function Navbar() {

    return (

        <div className="navbar">

            <ul><li>
                <p><Link to="/signin"><a href="">Sign In</a></Link></p>
            </li></ul>

        </div>
    )
}
