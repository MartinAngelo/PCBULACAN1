import React from "react";
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <div className="Footer">
    <div class="footer">
        <div class="footer-content">

            <div class="footer-main">
            <ul>
            <h2>MAIN</h2>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/products">PRODUCTS</Link></li>
                <li><Link to="/events">EVENTS</Link></li>
                <li><Link to="/ourstore">OUR STORE</Link></li>
                <li><Link to="/contactus">CONTACT US</Link></li>
            </ul>
             
            </div>
        </div>
        <div class="footer-product">

        <ul>
        <h2>PRODUCTS</h2>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/products">PRODUCTS</Link></li>
                <li><Link to="/events">EVENTS</Link></li>
                <li><Link to="/ourstore">OUR STORE</Link></li>
                <li><Link to="/contactus">CONTACT US</Link></li>
            </ul>
        </div>


        <div class="footer-subscribe">
        <ul>
        <h2>SUBSCRIBE</h2>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/products">PRODUCTS</Link></li>
                <li><Link to="/events">EVENTS</Link></li>
                <li><Link to="/ourstore">OUR STORE</Link></li>
                <li><Link to="/contactus">CONTACT US</Link></li>
            </ul>
        </div>

        <div class="footer-follow">
        <ul>
        <h2>FOLLOW US</h2>
                <li><Link to="/home">HOME</Link></li>
                <li><Link to="/products">PRODUCTS</Link></li>
                <li><Link to="/events">EVENTS</Link></li>
                <li><Link to="/ourstore">OUR STORE</Link></li>
                <li><Link to="/contactus">CONTACT US</Link></li>
            </ul>
        </div>
    </div>
    </div>
  );
}
