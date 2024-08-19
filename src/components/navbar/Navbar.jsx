import React from "react"
import './navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        
            <ul className="Navbar">
                <li><Link className="Link" to={"/"}  href="/">Home</Link></li>
                <li><Link className="Link" to={"blog"}  href="/blog">Blog</Link></li>
                <li><Link className="Link" to={"work"} href="/Work">Work</Link></li>
            </ul>
       
    )
}

export default Navbar