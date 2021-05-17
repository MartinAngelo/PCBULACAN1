import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <div class="footer">
        <div class="footer-content">
          <div class="footer-main">
            <ul>
              <h2>MAIN</h2>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/ourstore">Our Store</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-product">
          <ul>
            <h2>PRODUCTS</h2>
            <li>
              <Link to="/404">All Products</Link>
            </li>
            <li>
              <Link to="/404">Desktop</Link>
            </li>
            <li>
              <Link to="/404">Peripherals</Link>
            </li>
            <li>
              <Link to="/404">Networks Devices</Link>
            </li>
            <li>
              <Link to="/404">Other</Link>
            </li>
          </ul>
        </div>

        <div class="footer-subscribe">
          <ul>
            <h2>SUBSCRIBE</h2>
            <p>Enter your E-mail address to get latest deals and more</p>
            <input type="text" />
            <button class="submit">submit</button>
          </ul>
        </div>

        <div class="footer-follow">
          <ul>
            <h2>FOLLOW US</h2>
            <li>
              <Link to="/404">Facebook</Link>
            </li>
            <li>
              <Link to="/404">Twitter</Link>
            </li>
            <li>
              <Link to="/404">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
