import React from 'react';
import { Link } from "react-router-dom";

import firebase from "../utils/firebase";




export default function Nav() {
    const signout = () => {

        firebase.auth().signOut().then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <div className="navigation">
            <ul>
                <li><Link to="/Home">HOME</Link></li>
                <li><Link to="/Products">PRODUCTS</Link></li>
                <li><Link to="/Events">EVENTS</Link></li>
                <li><Link to="/OurStore">OUR STORE</Link></li>
                <li><Link to="/ContactUs">CONTACT US</Link></li>
                <li><Link to="/Profile">PROFILE</Link></li>

              

                <div className="right">
                    <li>
                        <button class="sign" onClick={signout}>SIGN OUT</button>
                    </li>
                </div>

            </ul>

        </div>
    )
}
