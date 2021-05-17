import React from 'react'
import {Link} from "react-router-dom"

export default function Nav() {
    return (
        <div className="navigation">
            <ul>
                <li><Link to="/Home">HOME</Link></li>
                <li><Link to="/Products">PRODUCTS</Link></li>
                <li><Link to="/Events">EVENTS</Link></li>
                <li><Link to="/OurStore">OUR STORE</Link></li>
                <li><Link to="/ContactUs">CONTACT US</Link></li>
                <div className="right">
                <li><Link to="/Login">LOG IN</Link></li>
                <li><Link to="/Login" >LOG OUT</Link></li>
                </div>
        
            </ul>
            
        </div>
    )
}
