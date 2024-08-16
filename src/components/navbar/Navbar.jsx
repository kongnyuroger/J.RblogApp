import React from "react"
import './navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        
            <ul className="Navbar">
                <li><Link className="Link" href="/">Home</Link></li>
                <li><Link className="Link" href="/blog">Blog</Link></li>
                <li><Link className="Link" href="/Work">Work</Link></li>
            </ul>
       
    )
}

export default Navbar