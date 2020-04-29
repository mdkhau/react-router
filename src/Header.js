import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header>
        <nav>
            <div className="navbar">
                <a href="/home">Logo</a>
                <ul className="nav_ul">
                    <li><Link to='/'>HOME</Link></li>
                    <li><Link to='/about'>ABOUT</Link></li>
                    <li><Link to='/contact'>CONTACT</Link></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Header
